import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthRequest } from '../../modelos/auth-request';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() registrar = new EventEmitter<void>();

  loginForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private authservice: AuthService
    ) {
    this.loginForm = this.fb.group({
      // email: ['', [Validators.required, Validators.email]],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const authRequest = new AuthRequest();
      authRequest.usuario = this.loginForm.value.usuario;
      authRequest.password = this.loginForm.value.password;
      this.authservice.autenticarUsuario(authRequest).subscribe( response => {
          this.onSuccess(response);
        }, error => {
          console.error('Credenciales incorrectos, comprueba el usuario o contraseña', error);
        }
      );
    }
  }

  onRegistrar() {
    this.registrar.emit();
  }

  onSuccess(response: any) {
    console.log('Login exitoso');
    localStorage.setItem('usuario', JSON.stringify(response));
    // localStorage.setItem('token', response.token); // si tu API devuelve un token

    this.router.navigate(['/home']);
  }

  logout() {
    localStorage.removeItem('usuario');
    // localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
