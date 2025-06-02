import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './buscador-usuarios.component.html',
  styleUrl: './buscador-usuarios.component.scss'
})
export class BuscadorUsuariosComponent {
  @Output() buscar = new EventEmitter<Usuario>();
  
  busquedaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.busquedaForm = this.fb.group({
      nombre_usuario: [''],
      apellidos: [''],
      email: [''],
      sexo: [''],
      fecha_nacimiento: [''],
      fecha_creacion: [''],
      es_admin: ['']
    });
  }

  onSubmit() {
    const usuario: Usuario = this.busquedaForm.value;
    this.buscar.emit(usuario);
  }
}
