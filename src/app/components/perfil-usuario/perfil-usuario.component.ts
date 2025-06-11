import { Component } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { environment } from '../../../environment';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.scss'
})
export class PerfilUsuarioComponent {
  usuario: Usuario | null = null;
  imagenPerfil: string = 'assets/default-profile.png'; // Ruta por defecto
  urlRecursos = environment.recursos;


  
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    const nombre_usuario = this.route.snapshot.paramMap.get('nombre_usuario');
    if (nombre_usuario) {
      // Cargar el usuario
      this.usuarioService.obtenerUsuario(nombre_usuario).subscribe(usuario => {
        this.usuario = usuario;
        this.imagenPerfil = this.formateaUrl(usuario.imagen_perfil || 'assets/default-profile.png');
      });
    } else {
      // Si no hay parámetro, carga el usuario logueado
      const usuario = localStorage.getItem('usuario');
      if (usuario) {
        this.usuario = JSON.parse(usuario) as Usuario;
        this.imagenPerfil = this.formateaUrl(this.usuario.imagen_perfil || 'assets/default-profile.png');

      }
    }
  }
  onCambiarImagen(event: any) {
    const file = event.target.files[0];
    if (file && file.size > 20 * 1024 * 1024) { // 20 MB
      alert('El archivo es demasiado grande. Máximo 20 MB.');
      return;
    }
    if (file && this.usuario) {
      const formData = new FormData();
      formData.append('imagen', file);
      formData.append('nombre_usuario', this.usuario.nombre_usuario);

      this.usuarioService.actualizarImagenPerfil(formData).subscribe({
        next: (usuarioActualizado) => {
          this.imagenPerfil = this.formateaUrl(usuarioActualizado.imagen_perfil || 'assets/default-profile.png');
          alert('Imagen de perfil actualizada correctamente');
        },
        error: (err) => {
          console.error('Error al actualizar la imagen de perfil:', err);
        }
      });
    }
  }
  
  formateaUrl(ruta: string): string {
    if (!ruta) return 'assets/default-profile.png';
    if (ruta.startsWith('http')) return ruta;
    const rutaNormalizada = ruta.replace(/\\/g, '/');
    const idx = rutaNormalizada.indexOf('/uploads/');
    if (idx !== -1) {
      return `${this.urlRecursos}${rutaNormalizada.substring(idx)}`;
    }
    return rutaNormalizada;
  }
}
