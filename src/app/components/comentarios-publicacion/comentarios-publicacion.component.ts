import { Component, Input, OnInit } from '@angular/core';
import { ComentarioService } from '../../services/comentario.service';
import { Comentario } from '../../modelos/comentario';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-comentarios-publicacion',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './comentarios-publicacion.component.html',
  styleUrl: './comentarios-publicacion.component.scss'
})
export class ComentariosPublicacionComponent implements OnInit {
  @Input() idPublicacion!: number;
  comentarios: Comentario[] = [];
  cargando = false;

  constructor(
    private comentarioService: ComentarioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.idPublicacion) {
      this.cargarComentarios();
    }
  }

  cargarComentarios() {
    this.cargando = true;
    this.comentarioService.obtenerComentariosPorPublicacion(this.idPublicacion).subscribe(comentarios => {
      this.comentarios = comentarios;
      this.cargando = false;
    });
  }

  eliminarComentario(id_comentario: number) {
  if (confirm('¿Seguro que deseas eliminar este comentario?')) {
    this.comentarioService.eliminarComentario(id_comentario).subscribe(() => {
      this.cargarComentarios();
    });
  }
}
}