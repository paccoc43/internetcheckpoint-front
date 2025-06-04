import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NuevaPublicacionComponent } from '../../components/nueva-publicacion/nueva-publicacion.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    NuevaPublicacionComponent,
    MenuComponent,
    CommonModule,
    MenuAdminComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(public authService: AuthService) {}

}
