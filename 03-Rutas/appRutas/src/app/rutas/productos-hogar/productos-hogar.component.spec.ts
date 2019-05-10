import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosHogarComponent } from './productos-hogar.component';

describe('ProductosHogarComponent', () => {
  let component: ProductosHogarComponent;
  let fixture: ComponentFixture<ProductosHogarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosHogarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
