import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthRequest } from '../../modelos/auth-request';

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

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private authservice: AuthService
    ) {
    this.loginForm = this.fb.group({
      // email: ['', [Validators.required, Validators.email]],
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const authRequest = new AuthRequest();
      authRequest.usuario = this.loginForm.value.email;
      authRequest.passworld = this.loginForm.value.password;
      // Aquí deberías llamar a tu servicio de autenticación
      // Por ejemplo:
      this.authservice.autenticarUsuario(authRequest).subscribe( response => {
          console.log('Login exitoso:', response);
          // Aquí podrías redirigir al usuario a otra página
          this.router.navigate(['/home']);
        }, error => {
          console.error('Credenciales incorrectos, comprueba el usuario o contraseña', error);
        }
      );
    }
  }
}
