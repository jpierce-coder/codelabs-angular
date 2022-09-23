import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwComponent } from './child-tw.component';

describe('ChildTwComponent', () => {
  let component: ChildTwComponent;
  let fixture: ComponentFixture<ChildTwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
