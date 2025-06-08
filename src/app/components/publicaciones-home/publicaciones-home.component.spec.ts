import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesHomeComponent } from './publicaciones-home.component';

describe('PublicacionesHomeComponent', () => {
  let component: PublicacionesHomeComponent;
  let fixture: ComponentFixture<PublicacionesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionesHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicacionesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
