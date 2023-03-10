import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeTuCocheComponent } from './vende-tu-coche.component';

describe('VendeTuCocheComponent', () => {
  let component: VendeTuCocheComponent;
  let fixture: ComponentFixture<VendeTuCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendeTuCocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendeTuCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
