import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommonComponentComponent } from './something-cool.component';

describe('MyCommonComponentComponent', () => {
  let component: MyCommonComponentComponent;
  let fixture: ComponentFixture<MyCommonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCommonComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCommonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
