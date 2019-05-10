import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosVideojuegosComponent } from './productos-videojuegos.component';

describe('ProductosVideojuegosComponent', () => {
  let component: ProductosVideojuegosComponent;
  let fixture: ComponentFixture<ProductosVideojuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosVideojuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosVideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
