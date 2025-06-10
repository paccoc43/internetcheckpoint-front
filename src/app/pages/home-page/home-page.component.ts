import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NuevaPublicacionComponent } from '../../components/nueva-publicacion/nueva-publicacion.component';
import { PublicacionesHomeComponent } from '../../components/publicaciones-home/publicaciones-home.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FondoAnimadoComponent } from '../../components/fondo-animado/fondo-animado.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FondoAnimadoComponent,
    NuevaPublicacionComponent,
    MenuAdminComponent,
    PublicacionesHomeComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(public authService: AuthService) {}

}
