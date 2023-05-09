import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  ev : string = "http://localhost:9000";

  getAllProducts() {
    return this.httpClient.get(`${this.ev}/product`);    
  }
}
