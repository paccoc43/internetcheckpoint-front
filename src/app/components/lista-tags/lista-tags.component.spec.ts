import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTagsComponent } from './lista-tags.component';

describe('ListaTagsComponent', () => {
  let component: ListaTagsComponent;
  let fixture: ComponentFixture<ListaTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
