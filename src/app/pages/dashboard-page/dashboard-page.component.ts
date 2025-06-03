import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { ListaUsuariosComponent } from '../../components/lista-usuarios/lista-usuarios.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { BuscadorUsuariosComponent } from '../../components/buscador-usuarios/buscador-usuarios.component';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    CommonModule,
    MenuAdminComponent,
    ListaUsuariosComponent,
    BuscadorUsuariosComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  usuarioFiltro: Usuario | null = null;
  
  constructor(
    public authService: AuthService
  ) {}

  onSubmit(usuario: Usuario) {
    this.usuarioFiltro = usuario;
  }

}
