import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistComponent } from './productlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductlistComponent', () => {
  let component: ProductlistComponent;
  let fixture: ComponentFixture<ProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ProductlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
