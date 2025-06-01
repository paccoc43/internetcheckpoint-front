import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { ListaUsuariosComponent } from '../../components/lista-usuarios/lista-usuarios.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    CommonModule,
    ListaUsuariosComponent,
    MenuAdminComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  constructor(public authService: AuthService) {}

}
