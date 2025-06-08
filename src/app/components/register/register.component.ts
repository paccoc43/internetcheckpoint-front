import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @Output() volver = new EventEmitter<void>();
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nombre_usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      apellidos: ['', Validators.required],
      sexo: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required]
      // es_admin y fecha_creacion normalmente los gestiona el backend
    });
  }

  onVolver() {
    this.volver.emit();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const usuario = this.registerForm.value;
      // Aquí puedes llamar a tu servicio para registrar el usuario
      console.log('Usuario a registrar:', usuario);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
