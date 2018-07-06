import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestportComponent } from './testport.component';

describe('TestportComponent', () => {
  let component: TestportComponent;
  let fixture: ComponentFixture<TestportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
