import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderCocheComponent } from './vender-coche.component';

describe('VenderCocheComponent', () => {
  let component: VenderCocheComponent;
  let fixture: ComponentFixture<VenderCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderCocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenderCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
