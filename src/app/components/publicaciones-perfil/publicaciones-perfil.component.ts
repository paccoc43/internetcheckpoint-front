import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionService } from '../../services/publicacion.service';
import { Publicacion } from '../../modelos/publicacion';
import { Utilidades } from '../../utils/utilidades';
import { ComentariosPublicacionComponent } from '../comentarios-publicacion/comentarios-publicacion.component';
import { NuevoComentarioComponent } from '../nuevo-comentario/nuevo-comentario.component';
import { environment } from '../../../environment';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-publicaciones-perfil',
  standalone: true,
  imports: [
    CommonModule,
    ComentariosPublicacionComponent,
    MatIconModule,
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
    private publicacionService: PublicacionService,
    public authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.nombreUsuario = this.route.snapshot.paramMap.get('nombre_usuario') || '';
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
    if (ruta.startsWith('http')) return ruta;
    //Elimina las barras sobrantes
    const rutaNormalizada = ruta.replace(/\\/g, '/');
    const idx = rutaNormalizada.indexOf('/uploads/');
    if (idx !== -1) {
      return `${this.urlRecursos}${rutaNormalizada.substring(idx)}`;

    }
    return rutaNormalizada;
  }

  eliminarPublicacion(id: number) {
  if (confirm('¿Seguro que deseas eliminar esta publicación?')) {
    this.publicacionService.eliminarPublicacion(id).subscribe(() => {
      this.publicaciones = this.publicaciones.filter(pub => pub.id_publicacion !== id);
    });
  }
}
}