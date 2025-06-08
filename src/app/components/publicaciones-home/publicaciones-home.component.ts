import { Component, HostListener, OnInit } from '@angular/core';
import { Publicacion } from '../../modelos/publicacion';
import { CommonModule } from '@angular/common';
import { PublicacionService } from '../../services/publicacion.service';

@Component({
  selector: 'app-publicaciones-home',
  standalone: true,
  imports: [
    CommonModule
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

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100 && !this.cargando && !this.fin) {
      this.cargarMas();
    }
  }

  cargarMas() {
    this.cargando = true;
    this.publicacionService.obtenerPublicacionesPaginadas(this.page, this.size).subscribe(res => {
      if (res.length < this.size) this.fin = true;
      this.publicaciones = this.publicaciones.concat(res);
      this.page++;
      this.cargando = false;
    });
  }
}