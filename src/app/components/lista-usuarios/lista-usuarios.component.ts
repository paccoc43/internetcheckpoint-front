import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [
    NavbarComponent,
  ],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss'
})
export class ListaUsuariosComponent implements OnInit{
  private fecha_nacimiento:Date = new Date();
  usuarios:Usuario[];

  constructor () {};

  ngOnInit(): void {
    // this.usuarios = [{
    //   "nombre_usuario":"prueba1",
    //   "email":"pepe@gmail.com",
    //   "passworld":"pass",
    //   "fecha_creacion":null,
    //   "apellidos":"apellido1 apellido2",
    //   "sexo":"hermafrodita",
    //   "fecha_nacimiento":null,
    //   "es_admin":false
    // },];
  }

}
