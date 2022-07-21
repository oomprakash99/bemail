import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mailListComponent } from './mailList.component';

describe('mailListComponent', () => {
  let component: mailListComponent;
  let fixture: ComponentFixture<mailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ mailListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(mailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
