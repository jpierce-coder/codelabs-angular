import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingList1Component } from './shopping-list1.component';

describe('ShoppingList1Component', () => {
  let component: ShoppingList1Component;
  let fixture: ComponentFixture<ShoppingList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingList1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
