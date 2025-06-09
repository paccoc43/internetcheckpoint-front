import { Component, HostListener, OnInit } from '@angular/core';
import { Publicacion } from '../../modelos/publicacion';
import { CommonModule } from '@angular/common';
import { PublicacionService } from '../../services/publicacion.service';
import { ComentariosPublicacionComponent } from '../comentarios-publicacion/comentarios-publicacion.component';
import { NuevoComentarioComponent } from '../nuevo-comentario/nuevo-comentario.component';
import { Utilidades } from '../../utils/utilidades';

@Component({
  selector: 'app-publicaciones-home',
  standalone: true,
  imports: [
    CommonModule,
    ComentariosPublicacionComponent,
    NuevoComentarioComponent,
  ],
  templateUrl: './publicaciones-home.component.html',
  styleUrl: './publicaciones-home.component.scss'
})
export class PublicacionesHomeComponent implements OnInit {
  publicaciones: Publicacion[] = [];
  page = 0;
  size = 10;
  cargando = false;
  fin = false;

  constructor(private publicacionService: PublicacionService) {}

  ngOnInit() {
    this.cargarMas();
  }

  cargarMas() {
    this.cargando = true;
    this.publicacionService.obtenerPublicacionesPaginadas(this.page, this.size).subscribe((res) => {
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
      return `http://localhost:8080${rutaNormalizada.substring(idx)}`;
    }
    return rutaNormalizada;
  }
}