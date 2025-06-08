import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TagService } from '../../services/tag.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    MatIconModule,
    PickerComponent
  ],
  templateUrl: './editor-tags.component.html',
  styleUrl: './editor-tags.component.scss'
})
export class EditorTagsComponent implements OnInit {
  @ViewChild('emojiPicker') emojiPickerRef!: ElementRef;
  @ViewChild('emojiButton') emojiButtonRef!: ElementRef;

  tag: Tag = this.nuevaTag();
  editando: boolean = false;
  mostrarPicker: boolean = false;

  fuentes: string[] = [
  'Arial', 'Verdana', 'Tahoma', 'Trebuchet MS', 'Times New Roman',
  'Georgia', 'Garamond', 'Courier New', 'Brush Script MT', 'Comic Sans',
  'Impact', 'Lucida Console', 'Monaco', 'Palatino', 'Segoe UI',
  'Roboto', 'Montserrat', 'Lato', 'Oswald', 'Raleway'
  ];

  constructor(
    private tagService: TagService,
  ) {}

  ngOnInit(): void {}

  nuevaTag(): Tag {
    return {
      id_tag: 0,
      nombre: '',
      fuente: '',
      color: '',
      descripcion: '',
      emoji: '',
      nombre_usuario: Utilidades.obtenerNombreUsuario()
    };
  }

  guardarTag() {
    if (this.editando) {
      this.tagService.modificarTag(this.tag).subscribe(() => {
        this.cancelar();
      });
    } else {
      this.tagService.crearTag(this.tag).subscribe((nuevaTag) => {
        console.log('Tag creada con id:', nuevaTag.id_tag);
        this.cancelar();
      });
    }
  }

  editarTag(tag: Tag) {
    this.tag = tag ;
    this.editando = true;
  }

  cancelar() {
    this.tag = this.nuevaTag();
    this.editando = false;
  }

  seleccionarEmoji(event: any) {
    this.tag.emoji = event.emoji.native;
    this.mostrarPicker = false;
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

  eliminarEmoji() {
    this.tag.emoji = '';
  }
}