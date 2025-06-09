import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionService } from '../../services/publicacion.service';
import { Publicacion } from '../../modelos/publicacion';
import { Utilidades } from '../../utils/utilidades';

@Component({
  selector: 'app-publicaciones-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publicaciones-perfil.component.html',
  styleUrl: './publicaciones-perfil.component.scss'
})
export class PublicacionesPerfilComponent implements OnInit {
  @Input() nombreUsuario: string = '';
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

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2 && !this.cargando && !this.fin) {
      this.cargarMas();
    }
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
}