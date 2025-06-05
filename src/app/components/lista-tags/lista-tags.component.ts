import { Component } from '@angular/core';
import { Tag } from '../../modelos/tag';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-lista-tags',
  standalone: true,
  imports: [
      CommonModule,
      MatIconModule
    ],
  templateUrl: './lista-tags.component.html',
  styleUrl: './lista-tags.component.scss'
})
export class ListaTagsComponent {
  tags: Tag[] = [];

  constructor(private tagService: TagService) {}

  ngOnInit(): void {
    this.cargarTags();
  }

  cargarTags() {
    this.tagService.obtenerListaTags().subscribe(tags => this.tags = tags);
  }

  editarTag(tag: Tag) {
    // Aquí puedes emitir un evento o implementar la lógica para editar
    console.log('Editar tag:', tag);
  }

  eliminarTag(id_tag: number) {
    if (confirm('¿Seguro que deseas eliminar esta tag?')) {
      this.tagService.eliminarTag(id_tag).subscribe(() => this.cargarTags());
    }
  }
}
