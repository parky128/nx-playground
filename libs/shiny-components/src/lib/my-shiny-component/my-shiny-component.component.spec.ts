import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShinyComponentComponent } from './my-shiny-component.component';

describe('MyShinyComponentComponent', () => {
  let component: MyShinyComponentComponent;
  let fixture: ComponentFixture<MyShinyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyShinyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShinyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
