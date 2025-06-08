import { Component } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { CommonModule } from '@angular/common';

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

  ngOnInit(): void {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.usuario = JSON.parse(usuario) as Usuario;
      // Si tienes la URL de la imagen en el usuario, asígnala aquí
      // this.imagenPerfil = this.usuario.imagenPerfil || this.imagenPerfil;
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
