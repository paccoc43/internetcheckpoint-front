import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { Usuario } from '../modelos/usuario';
import { AuthRequest } from '../modelos/auth-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApi:string = environment.api;
  
  constructor(private httpclient:HttpClient) { }

  //Llamada al servidor para autenticar un usuario
  autenticarUsuario(authRequest:AuthRequest):Observable<any> {
    return this.httpclient.post<any>(`${this.urlApi}/auth/login`, authRequest);
  }

  //Llamada al servidor para registrar un nuevo usuario
  registrarUsuario(usuario: Usuario):Observable<any> {
    return this.httpclient.post<any>(`${this.urlApi}/auth/register`, usuario);
  }

  isLoggedIn(): boolean {
    const usuario = localStorage.getItem('usuario');
    return usuario !== null && usuario !== undefined;
  }

  isAdmin(): string {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const usuarioLogeado = JSON.parse(usuario);
      if (usuarioLogeado.es_admin === "1") {
      return "ADMIN";
      } 
    }
    return "NULL";
  }
}
