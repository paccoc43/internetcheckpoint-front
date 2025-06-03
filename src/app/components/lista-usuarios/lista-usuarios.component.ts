import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    
    MatIconModule,
],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss'
})
export class ListaUsuariosComponent implements OnInit, OnChanges{

  @Input() filtroUsuario: Usuario | null = null;

  public fecha_nacimiento:Date = new Date();
  public fecha_creacion:Date = new Date();

  usuarios:Usuario[];

  page: number = 1;
  size: number = 10;
  total: number = 0;
  pageSizes = [10, 25, 50, 100];

  constructor (
    private usuarioService:UsuarioService
  ) {};

  ngOnInit(): void {

    // this.obtenerUsuarios()
    this.obtenerPaginaUsuariosFiltrados();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filtroUsuario']) {
      this.obtenerPaginaUsuariosFiltrados();
    }
  }

  obtenerPaginaUsuariosFiltrados() {
  if (!this.filtroUsuario) {
    this.filtroUsuario = new Usuario();
  }
  this.usuarioService.obtenerPaginaUsuariosFiltrado(this.filtroUsuario, this.page, this.size)
    .subscribe(datos => {
      this.usuarios = datos.content || [];
      this.total = datos.totalElements || 0;
    });
  }

  obtenerUsuarios() {
    this.usuarioService.obtenerListaUsuarios().subscribe(datos => {
      this.usuarios = datos;
    }, error => {
      console.error('Error al obtener la lista de usuarios:', error);
    });
  }

  obtenerUsuariosFiltrados() {
  this.usuarioService.obtenerListaUsuariosFiltrado(this.filtroUsuario).subscribe(datos => {
    this.usuarios = datos;
  });
  }

  editarUsuario(nombre: string) {
    console.log('Editar usuario:', nombre);
    this.usuarioService.obtenerUsuario(nombre).subscribe(usuario => {
      console.log('Usuario obtenido:', usuario);
      // Aquí podras abrir un modal o redirigir a una página de edición
    }, error => {
      console.error('Error al obtener el usuario:', error);
    });
  }
  
  eliminarUsuario(nombre: string) {
    console.log('Eliminar usuario:', nombre);
    this.usuarioService.eliminarUsuario(nombre).subscribe( () => {
      console.log('Usuario eliminado:', nombre);
      // Actualizar la lista de usuarios despues de eliminar
      this.obtenerUsuarios();
    }, error => {
      console.error('Error al eliminar el usuario:', error);
    });
  } 
  
  cambiarPagina(siguientePagina: number) {
    const nuevaPagina = this.page + siguientePagina;
    //Obtiene el numero maximo de paginas
    const maxPagina = Math.ceil(this.total / this.size);
    if (nuevaPagina >= 1 && nuevaPagina <= maxPagina) {
      this.page = nuevaPagina;
      this.obtenerPaginaUsuariosFiltrados();
    }
  }

  cambiarSize(size: number) {
    this.size = size;
    this.page = 1;
    this.obtenerPaginaUsuariosFiltrados();
  }

  //Metodo para calcular el maximo entre dos numeros
  min(a: number, b: number): number {
  return Math.min(a, b);
}

}
