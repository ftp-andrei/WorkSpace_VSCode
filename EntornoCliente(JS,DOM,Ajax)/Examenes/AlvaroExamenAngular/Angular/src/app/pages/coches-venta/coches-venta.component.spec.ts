import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesVentaComponent } from './coches-venta.component';

describe('CochesVentaComponent', () => {
  let component: CochesVentaComponent;
  let fixture: ComponentFixture<CochesVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CochesVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
