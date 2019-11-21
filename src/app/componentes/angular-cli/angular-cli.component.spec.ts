import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCliComponent } from './angular-cli.component';

describe('AngularCliComponent', () => {
  let component: AngularCliComponent;
  let fixture: ComponentFixture<AngularCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
