import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.scss'
})
export class EditarUsuarioComponent implements OnInit {
  @Input() usuario!: Usuario; // Recibe el usuario a editar
  editarForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService // Asegúrate de importar y usar el servicio adecuado
  ) {}

    ngOnChanges(changes: SimpleChanges) {
    if (changes['usuario'] && changes['usuario'].currentValue) {
      this.initForm();
    }
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.editarForm = this.fb.group({
      nombre_usuario: [this.usuario?.nombre_usuario || ''],
      apellidos: [this.usuario?.apellidos || ''],
      email: [this.usuario?.email || ''],
      sexo: [this.usuario?.sexo || ''],
      fecha_nacimiento: [this.usuario?.fecha_nacimiento || ''],
      // fecha_creacion: [this.usuario?.fecha_creacion || ''],
      es_admin: [this.usuario?.es_admin || '']
    });
  }

  onSubmit() {
    if (this.editarForm.valid) {
      const usuarioEditado: Usuario = this.editarForm.value;
      this.usuarioService.modificarUsuario(usuarioEditado).subscribe( response => {
          alert('Usuario modificado correctamente');
        }, error => {
          console.error('Credenciales incorrectos, comprueba el usuario o contraseña', error);
        }
      );
    }
  }
}