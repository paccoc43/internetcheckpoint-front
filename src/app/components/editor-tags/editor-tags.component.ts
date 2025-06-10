import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TagService } from '../../services/tag.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Tag } from '../../modelos/tag';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { Utilidades } from '../../utils/utilidades';

@Component({
  selector: 'app-editor-tags',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    PickerComponent
  ],
  templateUrl: './editor-tags.component.html',
  styleUrl: './editor-tags.component.scss'
})
export class EditorTagsComponent implements OnInit {
  @ViewChild('emojiPicker') emojiPickerRef!: ElementRef;
  @ViewChild('emojiButton') emojiButtonRef!: ElementRef;

  tagForm!: FormGroup;
  editando: boolean = false;
  mostrarPicker: boolean = false;
  tagEditando: Tag | null = null;

  fuentes: string[] = [
    'Arial', 'Verdana', 'Tahoma', 'Trebuchet MS', 'Times New Roman',
    'Georgia', 'Garamond', 'Courier New', 'Brush Script MT', 'Comic Sans',
    'Impact', 'Lucida Console', 'Monaco', 'Palatino', 'Segoe UI',
    'Roboto', 'Montserrat', 'Lato', 'Oswald', 'Raleway'
  ];

  constructor(
    private tagService: TagService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.tagForm = this.fb.group({
      nombre_usuario: [{ value: Utilidades.obtenerNombreUsuario(), disabled: true }],
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      fuente: [''],
      color: [''],
      emoji: [''],
      descripcion: ['', [Validators.maxLength(100)]]
    });
  }

  guardarTag() {
    if (this.tagForm.invalid) return;
    const tag: Tag = {
      ...this.tagForm.getRawValue(),
      id_tag: this.editando && this.tagEditando ? this.tagEditando.id_tag : 0
    };
    if (this.editando && this.tagEditando) {
      this.tagService.modificarTag(tag).subscribe(() => this.cancelar());
    } else {
      this.tagService.crearTag(tag).subscribe(() => this.cancelar());
    }
  }

  editarTag(tag: Tag) {
    this.tagEditando = tag;
    this.editando = true;
    this.tagForm.patchValue(tag);
  }

  cancelar() {
    this.tagForm.reset({
      nombre_usuario: Utilidades.obtenerNombreUsuario(),
      nombre: '',
      fuente: '',
      color: '',
      emoji: '',
      descripcion: ''
    });
    this.editando = false;
    this.tagEditando = null;
    this.mostrarPicker = false;
  }

  seleccionarEmoji(event: any) {
    this.tagForm.get('emoji')?.setValue(event.emoji.native);
    this.mostrarPicker = false;
  }

  eliminarEmoji() {
    this.tagForm.get('emoji')?.setValue('');
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