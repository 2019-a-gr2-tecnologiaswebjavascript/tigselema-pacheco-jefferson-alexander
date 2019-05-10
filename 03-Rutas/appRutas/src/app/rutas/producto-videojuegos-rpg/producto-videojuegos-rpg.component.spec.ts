import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoVideojuegosRpgComponent } from './producto-videojuegos-rpg.component';

describe('ProductoVideojuegosRpgComponent', () => {
  let component: ProductoVideojuegosRpgComponent;
  let fixture: ComponentFixture<ProductoVideojuegosRpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoVideojuegosRpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoVideojuegosRpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
