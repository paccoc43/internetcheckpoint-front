import { AfterRenderPhase, Component, afterRender } from '@angular/core';

let anime: any;
const boton = document.getElementById("activar");
let el = document.getElementById("container");
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
