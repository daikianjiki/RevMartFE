import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../models/user';

describe('UserService', () => {
  let service: UserService;
  let http: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ UserService ]
    });
    service = TestBed.inject(UserService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const mockUser : User = {
    id: 1, 
    username: 'username', 
    password: 'password',
    balance: 0,
    cart: []
  };
  const mockProduct = {id: 1, name: 'apples', price: 1.49, quantity: 1};

  it('POST register', () => {
    service.register(mockUser).subscribe(json => {
      expect(json).toEqual(mockUser);
    });

    const req = http.expectOne(`${service.ev}/user/register`);
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);
  });

  it('POST login', () => {
    service.login(mockUser).subscribe(json => {
      expect(json).toEqual(mockUser);
    });

    const req = http.expectOne(`${service.ev}/user/login`);
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);
  });

  it('POST add to cart', () => {
    service.addToCart(mockUser.id, mockProduct.id, mockUser).subscribe(json => {
      expect(json).toEqual(mockUser);
    });

    const req = http.expectOne(`${service.ev}/user/1/addProduct/1`);
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);
  });

  it('POST remove from cart', () => {
    service.removeFromCart(mockUser.id, mockProduct.id, mockUser).subscribe(json => {
      expect(json).toEqual(mockUser);
    });

    const req = http.expectOne(`${service.ev}/user/1/removeProduct/1`);
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);
  });

  it('GET user by id', () => {
    service.getUserById(mockUser.id).subscribe(json => {
      expect(json).toEqual(mockUser);
    });

    const req = http.expectOne(`${service.ev}/user/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  it(`PATCH user's cart for checkout`, () => {
    service.checkout(mockUser.id, mockUser).subscribe(json => {
      expect(json).toEqual(mockUser);
    });

    const req = http.expectOne(`${service.ev}/user/1/emptyCart`);
    expect(req.request.method).toBe('PATCH');
    req.flush(mockUser);
  })
});
