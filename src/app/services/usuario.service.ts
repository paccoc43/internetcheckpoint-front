import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { Page } from '../modelos/page';
// Interfaz Page para paginación


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi:string = environment.api;

  constructor(
    private httpclient:HttpClient
  ) {}

  //Obtiene una lista de usuarios
  obtenerListaUsuarios():Observable<Usuario[]> {
    return this.httpclient.get<Usuario[]>(`${this.urlApi}/usuarios`);
  }
  // Obtiene una pagina de usuarios filtrados
  obtenerPaginaUsuariosFiltrado(filtro: Usuario | null, page: number, size: number) {
    return this.httpclient.post<Page<Usuario>>(`${this.urlApi}/usuarios/pagina`, filtro,{ params: { page, size } });
  }

  // Obtiene una lista de usuarios filtrados
  obtenerListaUsuariosFiltrado(filtro: Usuario | null): Observable<Usuario[]> {
    return this.httpclient.post<Usuario[]>(`${this.urlApi}/usuarios/buscar`, filtro || {});
  }
  
  //Obtiene un usuario utilizando nombre_usuario como identificador
  obtenerUsuario(nombre_usuario:string):Observable<Usuario> {
    return this.httpclient.get<Usuario>(`${this.urlApi}/usuarios/${nombre_usuario}`);
  }

  //Elimina un usuario utilizando nombre_usuario como identificador
  eliminarUsuario(nombre_usuario:string):Observable<Usuario> {
    return this.httpclient.delete<Usuario>(`${this.urlApi}/usuarios/${nombre_usuario}`);
  }

  //Modifica un usuario utilizando nombre_usuario como identificador
  modificarUsuario(usuario:Usuario):Observable<Usuario> {
    return this.httpclient.put<Usuario>(`${this.urlApi}/usuarios/${usuario.nombre_usuario}`, usuario);
  }

  actualizarImagenPerfil(formData: FormData): Observable<Usuario> {
    return this.httpclient.put<Usuario>(`${this.urlApi}/usuarios/imagen`,formData);
  }
}
