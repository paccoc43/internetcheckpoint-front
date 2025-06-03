import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tags-page',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    CommonModule,
    MenuAdminComponent
  ],
  templateUrl: './tags-page.component.html',
  styleUrl: './tags-page.component.scss'
})
export class TagsPageComponent {

    constructor(
      public authService: AuthService
    ) {}
  
}
