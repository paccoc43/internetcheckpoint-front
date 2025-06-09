import { Component } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

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

  
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    const nombre_usuario = this.route.snapshot.paramMap.get('nombre_usuario');
    if (nombre_usuario) {
      // Cargar el usuario desde el servicio usando el nombre_usuario de la ruta
      this.usuarioService.obtenerUsuario(nombre_usuario).subscribe(usuario => {
        this.usuario = usuario;
        // Si tienes la URL de la imagen en el usuario, asígnala aquí
        // this.imagenPerfil = this.usuario.imagenPerfil || this.imagenPerfil;
      });
    } else {
      // Si no hay parámetro, carga el usuario logueado como antes
      const usuario = localStorage.getItem('usuario');
      if (usuario) {
        this.usuario = JSON.parse(usuario) as Usuario;
      }
    }
  }

  onCambiarImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenPerfil = e.target.result;
        // Aquí podrías guardar la imagen en el backend si lo deseas
      };
      reader.readAsDataURL(file);
    }
  }
}
