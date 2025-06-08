import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Observable } from 'rxjs';
import { Publicacion } from '../modelos/publicacion';
import { Page } from '../modelos/page';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  private urlApi: string = environment.api;

  constructor(
    private httpclient: HttpClient
  ) { }

// Obtener todas las publicaciones
  obtenerListaPublicaciones(): Observable<Publicacion[]> {
    return this.httpclient.get<Publicacion[]>(`${this.urlApi}/publicaciones`);
  }

  // Obtener una publicación por ID
  obtenerPublicacion(id_publicacion: number): Observable<Publicacion> {
    return this.httpclient.get<Publicacion>(`${this.urlApi}/publicaciones/${id_publicacion}`);
  }

  // Crear una nueva publicación
  crearPublicacion(publicacion: Publicacion): Observable<Publicacion> {
    return this.httpclient.post<Publicacion>(`${this.urlApi}/publicaciones`, publicacion);
  }

  // Actualizar una publicación existente
  modificarPublicacion(publicacion: Publicacion): Observable<Publicacion> {
    return this.httpclient.put<Publicacion>(`${this.urlApi}/publicaciones/${publicacion.id_publicacion}`, publicacion);
  }

  // Eliminar una publicación por ID
  eliminarPublicacion(id_publicacion: number): Observable<void> {
    return this.httpclient.delete<void>(`${this.urlApi}/publicaciones/${id_publicacion}`);
  }

  obtenerPublicacionesPaginadas(page: number, size: number): Observable<Page<Publicacion>> {
    return this.httpclient.get<Page<Publicacion>>(`${this.urlApi}/publicaciones/pagina?page=${page}&size=${size}`);
  }
}
