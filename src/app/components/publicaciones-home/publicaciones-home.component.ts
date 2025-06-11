import { Component, HostListener, OnInit } from '@angular/core';
import { Publicacion } from '../../modelos/publicacion';
import { CommonModule } from '@angular/common';
import { PublicacionService } from '../../services/publicacion.service';
import { ComentariosPublicacionComponent } from '../comentarios-publicacion/comentarios-publicacion.component';
import { NuevoComentarioComponent } from '../nuevo-comentario/nuevo-comentario.component';
import { environment } from '../../../environment';
import { AuthService } from '../../services/auth.service';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-publicaciones-home',
  standalone: true,
  imports: [
    CommonModule,
    ComentariosPublicacionComponent,
    NuevoComentarioComponent,
    MatIconModule
  ],
  templateUrl: './publicaciones-home.component.html',
  styleUrl: './publicaciones-home.component.scss'
})
export class PublicacionesHomeComponent implements OnInit {
  urlRecursos = environment.recursos;
  publicaciones: Publicacion[] = [];
  page = 0;
  size = 10;
  cargando = false;
  fin = false;

  constructor(
    private publicacionService: PublicacionService,
    public authService: AuthService
  ) {}

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
    // Normaliza las barras
    const rutaFormateada = ruta.replace(/\\/g, '/');
    // Busca la subruta /uploads/
    const idx = rutaFormateada.indexOf('/uploads/');
    if (idx !== -1) {
      // Cambia el puerto si tu backend es diferente
      // return `http://localhost:8080${rutaNormalizada.substring(idx)}`;
      return `${this.urlRecursos}${rutaFormateada.substring(idx)}`;

    }
    return rutaFormateada;
  }

  eliminarPublicacion(id: number) {
    if (confirm('¿Seguro que deseas eliminar esta publicación?')) {
      this.publicacionService.eliminarPublicacion(id).subscribe(() => {
        this.publicaciones = this.publicaciones.filter(pub => pub.id_publicacion !== id);
      });
    }
  }
}