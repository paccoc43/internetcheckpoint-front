import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { ComentarioService } from '../../services/comentario.service';
import { Comentario } from '../../modelos/comentario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Utilidades } from '../../utils/utilidades';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';

@Component({
  selector: 'app-nuevo-comentario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PickerComponent
  ],
  templateUrl: './nuevo-comentario.component.html',
  styleUrl: './nuevo-comentario.component.scss'
})
export class NuevoComentarioComponent {
  @Input() idPublicacion!: number;
  @Output() comentarioCreado = new EventEmitter<void>();

  
  @ViewChild('emojiPicker') emojiPickerRef!: ElementRef;
  @ViewChild('emojiButton') emojiButtonRef!: ElementRef;
  @ViewChild('inputComentario') inputComentarioRef!: ElementRef;

  contenido: string = '';
  cargando = false;
  error: string = '';
  exito: boolean = false;
  mostrarPicker = false;

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

  agregarEmoji(event: any) {
    const emoji = event.emoji?.native || event.emoji || event.native;
    const input = this.inputComentarioRef.nativeElement as HTMLInputElement;
    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    this.contenido = this.contenido.slice(0, start) + emoji + this.contenido.slice(end);
    setTimeout(() => {
      input.focus();
      input.setSelectionRange(start + emoji.length, start + emoji.length);
    }, 0);
  }

  @HostListener('document:mousedown', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (this.mostrarPicker) {
      const pickerEl = this.emojiPickerRef?.nativeElement;
      const buttonEl = this.emojiButtonRef?.nativeElement;
      if (
        pickerEl && !pickerEl.contains(event.target) &&
        buttonEl && !buttonEl.contains(event.target)
      ) {
        this.mostrarPicker = false;
      }
    }
  }
}