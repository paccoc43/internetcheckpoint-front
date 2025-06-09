import { Component, Input, OnInit } from '@angular/core';
import { ComentarioService } from '../../services/comentario.service';
import { Comentario } from '../../modelos/comentario';
import { CommonModule } from '@angular/common';

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
    private comentarioService: ComentarioService
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
}