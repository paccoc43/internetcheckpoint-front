import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../modelos/tag';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private urlApi:string = environment.api;

  constructor(private httpclient: HttpClient) { }

  // Obtener todos los tags
  obtenerListaTags(): Observable<Tag[]> {
    return this.httpclient.get<Tag[]>(`${this.urlApi}/tags`);
  }

  // Obtener un tag por ID
  obtenerTag(id_tag: number): Observable<Tag> {
    return this.httpclient.get<Tag>(`${this.urlApi}/tags/${id_tag}`);
  }

  // Crear un nuevo tag
  crearTag(tag: Tag): Observable<Tag> {
    return this.httpclient.post<Tag>(`${this.urlApi}/tags`, tag);
  }

  // Actualizar un tag existente
  modificarTag(tag: Tag): Observable<Tag> {
    return this.httpclient.put<Tag>(`${this.urlApi}/tags/${tag.id_tag}`, tag);
  }

  // Eliminar un tag por ID
  eliminarTag(id_tag: number): Observable<void> {
    return this.httpclient.delete<void>(`${this.urlApi}/tags/${id_tag}`);
  }
}