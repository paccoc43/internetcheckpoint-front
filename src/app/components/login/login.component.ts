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
      authRequest.password = this.loginForm.value.password;
      this.authservice.autenticarUsuario(authRequest).subscribe( response => {
          this.onSuccess(response);
        }, error => {
          console.error('Credenciales incorrectos, comprueba el usuario o contraseña', error);
        }
      );
    }
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
