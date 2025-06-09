import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComentarioService } from '../../services/comentario.service';
import { Comentario } from '../../modelos/comentario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Utilidades } from '../../utils/utilidades';

@Component({
  selector: 'app-nuevo-comentario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-comentario.component.html',
  styleUrl: './nuevo-comentario.component.scss'
})
export class NuevoComentarioComponent {
  @Input() idPublicacion!: number;
  @Output() comentarioCreado = new EventEmitter<void>();

  contenido: string = '';
  cargando = false;
  error: string = '';
  exito: boolean = false;

  constructor(private comentarioService: ComentarioService) {}

  enviarComentario() {
    this.error = '';
    this.exito = false;
    if (!this.contenido.trim()) {
      this.error = 'El comentario no puede estar vacío.';
      return;
    }
    const nuevoComentario: Comentario = {
      id_comentario: 0,
      id_publicacion: this.idPublicacion,
      nombre_usuario: Utilidades.obtenerNombreUsuario(),
      contenido: this.contenido,
      fecha_comentario: ""
    };
    this.cargando = true;
    this.comentarioService.crearComentario(nuevoComentario).subscribe({
      next: () => {
        this.exito = true;
        this.contenido = '';
        this.cargando = false;
        this.comentarioCreado.emit(); // <--- Esto ya está bien

      },
      error: () => {
        this.error = 'No se pudo enviar el comentario.';
        this.cargando = false;
      }
    });
  }
}