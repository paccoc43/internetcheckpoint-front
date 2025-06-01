import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApi:string = environment.api;
  
  constructor(private httpclient:HttpClient) { }
  //Llamada al servidor para autenticar un usuario
  autenticarUsuario(nombre_usuario:string, contrasena:string):Observable<any> {
    return this.httpclient.post<any>(`${this.urlApi}/auth/login`, { nombre_usuario, contrasena });
  }

  //Llamada al servidor para registrar un nuevo usuario
  registrarUsuario(usuario: Usuario):Observable<any> {
    return this.httpclient.post<any>(`${this.urlApi}/auth/register`, usuario);
  }

}
