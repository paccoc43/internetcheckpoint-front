import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { ListaUsuariosComponent } from '../../components/lista-usuarios/lista-usuarios.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    ListaUsuariosComponent,
    MenuAdminComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
