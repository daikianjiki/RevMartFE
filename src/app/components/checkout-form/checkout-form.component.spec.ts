import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFormComponent } from './checkout-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from 'src/app/services/user.service';

describe('CheckoutFormComponent', () => {
  let component: CheckoutFormComponent;
  let fixture: ComponentFixture<CheckoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
      declarations: [ CheckoutFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
