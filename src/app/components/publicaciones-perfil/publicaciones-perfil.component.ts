import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionService } from '../../services/publicacion.service';
import { Publicacion } from '../../modelos/publicacion';
import { Utilidades } from '../../utils/utilidades';
import { ComentariosPublicacionComponent } from '../comentarios-publicacion/comentarios-publicacion.component';
import { NuevoComentarioComponent } from '../nuevo-comentario/nuevo-comentario.component';
import { environment } from '../../../environment';

@Component({
  selector: 'app-publicaciones-perfil',
  standalone: true,
  imports: [
    CommonModule,
    ComentariosPublicacionComponent,
    NuevoComentarioComponent
  ],
  templateUrl: './publicaciones-perfil.component.html',
  styleUrl: './publicaciones-perfil.component.scss'
})
export class PublicacionesPerfilComponent implements OnInit {
  @Input() nombreUsuario: string = '';
  urlRecursos = environment.recursos;
  publicaciones: Publicacion[] = [];
  page = 0;
  size = 10;
  cargando = false;
  fin = false;

  constructor(
    private publicacionService: PublicacionService
  ) {}

  ngOnInit() {
    if (!this.nombreUsuario) this.nombreUsuario = Utilidades.obtenerNombreUsuario();
    this.cargarMas();
  }

  cargarMas() {
    this.cargando = true;
    this.publicacionService.obtenerPublicacionesPerfilPaginadas(this.nombreUsuario, this.page, this.size).subscribe((res) => {
      const nuevas = res.content || [];
      if (nuevas.length < this.size) this.fin = true;
      this.publicaciones = this.publicaciones.concat(nuevas);
      this.page++;
      this.cargando = false;
    });
  }

  formateaUrl(ruta: string): string {
    // Si la ruta ya es una URL pública, solo retorna la ruta
    if (ruta.startsWith('http')) return ruta;
    // Normaliza las barras
    const rutaNormalizada = ruta.replace(/\\/g, '/');
    // Busca la subruta /uploads/
    const idx = rutaNormalizada.indexOf('/uploads/');
    if (idx !== -1) {
      // Cambia el puerto si tu backend es diferente
      // return `http://localhost:8080${rutaNormalizada.substring(idx)}`;
      return `${this.urlRecursos}${rutaNormalizada.substring(idx)}`;

    }
    return rutaNormalizada;
  }
}