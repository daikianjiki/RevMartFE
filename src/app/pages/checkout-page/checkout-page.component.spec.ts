import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPageComponent } from './checkout-page.component';
import { CheckoutFormComponent } from 'src/app/components/checkout-form/checkout-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CheckoutPageComponent', () => {
  let component: CheckoutPageComponent;
  let fixture: ComponentFixture<CheckoutPageComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ 
        CheckoutPageComponent, 
        CheckoutFormComponent 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
