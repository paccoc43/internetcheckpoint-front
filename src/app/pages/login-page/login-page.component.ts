import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { FondoAnimadoComponent } from '../../components/fondo-animado/fondo-animado.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FondoAnimadoComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  mostrarRegistro = false;

  mostrarFormularioRegistro() {
    this.mostrarRegistro = true;
  }

  mostrarFormularioLogin() {
    this.mostrarRegistro = false;
  }
}
