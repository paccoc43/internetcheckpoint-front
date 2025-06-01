import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Usuario } from '../../modelos/usuario';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuAdminComponent } from "../menu-admin/menu-admin.component";
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    HttpClientModule,
    MenuAdminComponent,
    MatIconModule,
],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss'
})
export class ListaUsuariosComponent implements OnInit{

  public fecha_nacimiento:Date = new Date();
  public fecha_creacion:Date = new Date();

  usuarios:Usuario[];

  constructor (
    private usuarioService:UsuarioService
  ) {};

  ngOnInit(): void {

    this.obtenerUsuarios()
 
  }

  private obtenerUsuarios() {
    this.usuarioService.obtenerListaUsuarios().subscribe(datos => {
      this.usuarios = datos;
    }, error => {
      console.error('Error al obtener la lista de usuarios:', error);
    });
  }

  editarUsuario(nombre: string) {
    console.log('Editar usuario:', nombre);
    this.usuarioService.obtenerUsuario(nombre).subscribe(usuario => {
      console.log('Usuario obtenido:', usuario);
      // Aquí podrías abrir un modal o redirigir a una página de edición
    }, error => {
      console.error('Error al obtener el usuario:', error);
    });
  }
  
  eliminarUsuario(nombre: string) {
    console.log('Eliminar usuario:', nombre);
    this.usuarioService.eliminarUsuario(nombre).subscribe( () => {
      console.log('Usuario eliminado:', nombre);
      // Actualizar la lista de usuarios después de eliminar
      this.obtenerUsuarios();
    }, error => {
      console.error('Error al eliminar el usuario:', error);
    });
  } 
  

}
