import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcampageComponent } from './webcampage.component';

describe('WebcampageComponent', () => {
  let component: WebcampageComponent;
  let fixture: ComponentFixture<WebcampageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebcampageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcampageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
