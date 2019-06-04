import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraListarComponent } from './compra-listar.component';

describe('CompraListarComponent', () => {
  let component: CompraListarComponent;
  let fixture: ComponentFixture<CompraListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
