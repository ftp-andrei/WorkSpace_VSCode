import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarComponentComponent } from './sell-car-component.component';

describe('SellCarComponentComponent', () => {
  let component: SellCarComponentComponent;
  let fixture: ComponentFixture<SellCarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellCarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
