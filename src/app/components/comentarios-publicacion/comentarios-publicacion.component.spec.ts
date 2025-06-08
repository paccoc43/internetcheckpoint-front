import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosPublicacionComponent } from './comentarios-publicacion.component';

describe('ComentariosPublicacionComponent', () => {
  let component: ComentariosPublicacionComponent;
  let fixture: ComponentFixture<ComentariosPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentariosPublicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComentariosPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
