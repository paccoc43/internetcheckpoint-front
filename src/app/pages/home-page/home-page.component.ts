import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NuevaPublicacionComponent } from '../../components/nueva-publicacion/nueva-publicacion.component';
import { MostrarPublicacionesComponent } from '../../components/mostrar-publicaciones/mostrar-publicaciones.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    NuevaPublicacionComponent,
    MenuAdminComponent,
    MenuComponent,
    MostrarPublicacionesComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(public authService: AuthService) {}

}
