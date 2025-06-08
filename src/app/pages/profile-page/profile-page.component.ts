import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PerfilUsuarioComponent } from '../../components/perfil-usuario/perfil-usuario.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    PerfilUsuarioComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

}
