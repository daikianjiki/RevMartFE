import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPageComponent } from './products-page.component';
import { ProductlistComponent } from 'src/app/components/productlist/productlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ 
        ProductsPageComponent, 
        ProductlistComponent 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
