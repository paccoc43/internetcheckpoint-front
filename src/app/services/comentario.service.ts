import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../modelos/comentario';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private urlApi: string = environment.api;

  constructor(
    private httpclient: HttpClient
  ) { }

  // Obtener todos los comentarios
  obtenerListaComentarios(): Observable<Comentario[]> {
    return this.httpclient.get<Comentario[]>(`${this.urlApi}/comentarios`);
  }

  // Obtener un comentario por ID
  obtenerComentario(id_comentario: number): Observable<Comentario> {
    return this.httpclient.get<Comentario>(`${this.urlApi}/comentarios/${id_comentario}`);
  }

  obtenerComentariosPorPublicacion(id_publicacion: number): Observable<Comentario[]> {
    return this.httpclient.get<Comentario[]>(`${this.urlApi}/comentarios/publicacion/${id_publicacion}`);
  }

  // Crear un nuevo comentario
  crearComentario(comentario: Comentario): Observable<Comentario> {
    return this.httpclient.post<Comentario>(`${this.urlApi}/comentarios`, comentario);
  }

  // Modificar un comentario existente
  modificarComentario(comentario: Comentario): Observable<Comentario> {
    return this.httpclient.put<Comentario>(`${this.urlApi}/comentarios/${comentario.id_comentario}`, comentario);
  }

  // Eliminar un comentario por ID
  eliminarComentario(id_comentario: number): Observable<void> {
    return this.httpclient.delete<void>(`${this.urlApi}/comentarios/${id_comentario}`);
  }
}