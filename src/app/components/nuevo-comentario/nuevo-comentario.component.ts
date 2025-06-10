import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { ComentarioService } from '../../services/comentario.service';
import { Comentario } from '../../modelos/comentario';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Utilidades } from '../../utils/utilidades';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';

@Component({
  selector: 'app-nuevo-comentario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
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

  comentarioForm: FormGroup;
  cargando = false;
  error: string = '';
  exito: boolean = false;
  mostrarPicker = false;

  constructor(
    private comentarioService: ComentarioService,
    private fb: FormBuilder
  ) {
    this.comentarioForm = this.fb.group({
      contenido: ['', [Validators.required, Validators.pattern(/\S+/)]]
    });
  }

  get contenido() {
    return this.comentarioForm.get('contenido');
  }

  enviarComentario() {
    this.error = '';
    this.exito = false;
    if (this.comentarioForm.invalid) {
      this.error = 'El comentario no puede estar vacío.';
      return;
    }
    const nuevoComentario: Comentario = {
      id_comentario: 0,
      id_publicacion: this.idPublicacion,
      nombre_usuario: Utilidades.obtenerNombreUsuario(),
      contenido: this.contenido?.value,
      fecha_comentario: ""
    };
    this.cargando = true;
    this.comentarioService.crearComentario(nuevoComentario).subscribe({
      next: () => {
        this.exito = true;
        this.comentarioForm.reset();
        this.cargando = false;
        this.comentarioCreado.emit();
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
    const valor = this.contenido?.value || '';
    this.contenido?.setValue(valor.slice(0, start) + emoji + valor.slice(end));
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