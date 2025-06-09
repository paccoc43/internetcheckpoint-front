import { Component, HostListener, OnInit } from '@angular/core';
import { Publicacion } from '../../modelos/publicacion';
import { CommonModule } from '@angular/common';
import { PublicacionService } from '../../services/publicacion.service';
import { ComentariosPublicacionComponent } from '../comentarios-publicacion/comentarios-publicacion.component';
import { NuevoComentarioComponent } from '../nuevo-comentario/nuevo-comentario.component';

@Component({
  selector: 'app-publicaciones-home',
  standalone: true,
  imports: [
    CommonModule,
    ComentariosPublicacionComponent,
    NuevoComentarioComponent
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
}