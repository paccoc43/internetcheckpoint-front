import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      // Aquí deberías llamar a tu servicio de autenticación
      // Por ejemplo:
      // this.authService.login(email, password).subscribe(...)
      if (email === 'admin@demo.com' && password === '1234') {
        // Simulación de login exitoso
        this.router.navigate(['/dashboard']);
      } else {
        alert('Credenciales incorrectas');
      }
    }
  }
}
