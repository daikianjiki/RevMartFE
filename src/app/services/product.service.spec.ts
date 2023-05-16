import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductService', () => {
  let service: ProductService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ProductService ]
    });
    service = TestBed.inject(ProductService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const mockProducts = [
    {id: 1, name: "apples", price: 2.49, quantity: 1},
    {id: 2, name: "bananas", price: 1.29, quantity: 2}
  ]

  it('GET all products', () => {
    service.getAllProducts().subscribe(json => {
      expect(json).toEqual(mockProducts);
    });

    const req = http.expectOne(`${service.serverAddress}/product`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  })
});
