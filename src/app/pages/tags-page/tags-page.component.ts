import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { AuthService } from '../../services/auth.service';
import { EditorTagsComponent } from '../../components/editor-tags/editor-tags.component';
import { ListaTagsComponent } from '../../components/lista-tags/lista-tags.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FondoAnimadoComponent } from "../../components/fondo-animado/fondo-animado.component";

@Component({
  selector: 'app-tags-page',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    CommonModule,
    FondoAnimadoComponent,
    MenuAdminComponent,
    EditorTagsComponent,
    ListaTagsComponent,
    FooterComponent
],
  templateUrl: './tags-page.component.html',
  styleUrl: './tags-page.component.scss'
})
export class TagsPageComponent {

    constructor(
      public authService: AuthService
    ) {}
  
}
