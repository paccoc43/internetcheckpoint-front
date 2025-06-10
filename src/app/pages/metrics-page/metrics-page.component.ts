import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { AuthService } from '../../services/auth.service';
import { FondoAnimadoComponent } from '../../components/fondo-animado/fondo-animado.component';

@Component({
  selector: 'app-metrics-page',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    CommonModule,
    FondoAnimadoComponent,
    MenuAdminComponent,
  ],
  templateUrl: './metrics-page.component.html',
  styleUrl: './metrics-page.component.scss'
})
export class MetricsPageComponent {

    constructor(
      public authService: AuthService
    ) {}
  
}
