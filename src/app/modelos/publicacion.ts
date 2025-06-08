export interface Publicacion {
  id_publicacion: number;
  fecha_publicacion: string;
  contenido: string;
  nombre_usuario: string;
  id_tag?: number;
}