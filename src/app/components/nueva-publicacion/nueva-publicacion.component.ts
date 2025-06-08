import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tag } from '../../modelos/tag';
import { TagService } from '../../services/tag.service';
import { PublicacionService } from '../../services/publicacion.service';
import { Publicacion } from '../../modelos/publicacion';
import { animate } from 'animejs';

@Component({
  selector: 'app-nueva-publicacion',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './nueva-publicacion.component.html',
  styleUrl: './nueva-publicacion.component.scss'
})
export class NuevaPublicacionComponent implements OnInit {
  publicacionForm: FormGroup;
  archivos: File[] = [];
  tags: Tag[] = [];

  constructor(
    private fb: FormBuilder,
    private tagService: TagService,
    private publicacionService: PublicacionService
  ) {
    this.publicacionForm = this.fb.group({
      texto: ['', Validators.required],
      tagSeleccionado: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarTags();
  }

  cargarTags() {
    this.tagService.obtenerListaTags().subscribe(tags => this.tags = tags);
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.archivos = Array.from(event.target.files);
    }
  }

  obtenerNombreUsuario(): string {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const datosUsuario = JSON.parse(usuario);
      return datosUsuario.nombre_usuario || '';
    }
    return '';
  }

  getTextoColor(): string {
    const tag = this.publicacionForm.get('tagSeleccionado')?.value;
    if (!tag?.color) return 'black';

    // Extrae los valores RGB del color hexadecimal
    const hex = tag.color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calcula el brillo (luminancia)
    const luminancia = (0.299 * r + 0.587 * g + 0.114 * b);

    // Si es oscuro, texto blanco; si es claro, texto negro
    return luminancia < 128 ? 'white' : 'black';
  }

  onSubmit() {
    if (this.publicacionForm.invalid) {
      this.publicacionForm.markAllAsTouched();
      return;
    }

    const formValue = this.publicacionForm.value;
    const publicacion: Publicacion = {
      id_publicacion: 0,
      fecha_publicacion: '',
      contenido: formValue.texto,
      nombre_usuario: this.obtenerNombreUsuario(),
      id_tag: formValue.tagSeleccionado.id_tag
    };

    // Si necesitas enviar archivos, usa FormData. Si no, puedes enviar el objeto directamente.
    if (this.archivos.length > 0) {
      const formData = new FormData();
      formData.append('texto', formValue.texto);
      formData.append('tag', formValue.tagSeleccionado.id_tag.toString());
      this.archivos.forEach((archivo) => {
        formData.append('archivos', archivo);
      });
      console.log('Enviando publicación con archivos:', formData);
      // this.publicacionService.crearPublicacionArchivos(formData).subscribe(response => {
      //   alert('Publicación enviada con éxito');
      // });
    } else {
      this.publicacionService.crearPublicacion(publicacion).subscribe(response => {
        alert('Publicación enviada con éxito');
      });
    }
  }
}