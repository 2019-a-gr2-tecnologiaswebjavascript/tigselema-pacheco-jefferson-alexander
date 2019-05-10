import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoVideojuegosPlataformaComponent } from './producto-videojuegos-plataforma.component';

describe('ProductoVideojuegosPlataformaComponent', () => {
  let component: ProductoVideojuegosPlataformaComponent;
  let fixture: ComponentFixture<ProductoVideojuegosPlataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoVideojuegosPlataformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoVideojuegosPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
