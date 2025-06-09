import { Tag } from "./tag";

export interface Publicacion {
  id_publicacion: number;
  fecha_publicacion: string;
  contenido: string;
  nombre_usuario: string;
  tag: Tag;
}