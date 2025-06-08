import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPublicacionesComponent } from './mostrar-publicaciones.component';

describe('MostrarPublicacionesComponent', () => {
  let component: MostrarPublicacionesComponent;
  let fixture: ComponentFixture<MostrarPublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPublicacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
