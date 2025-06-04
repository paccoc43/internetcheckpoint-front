import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-publicacion',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './nueva-publicacion.component.html',
  styleUrl: './nueva-publicacion.component.scss'
})
export class NuevaPublicacionComponent {
  texto: string = '';
  archivos: File[] = [];

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.archivos = Array.from(event.target.files);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('texto', this.texto);
    this.archivos.forEach((archivo, i) => {
      formData.append('archivos', archivo);
    });

    // Aquí deberías llamar a tu servicio para enviar el formData al backend
    // this.tuServicioPublicacion.subirPublicacion(formData).subscribe(...)
    alert('Publicación enviada (simulado)');
  }
}
