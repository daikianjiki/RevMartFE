import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  /**
   * The address and port of the server where the API endpoints are located.
   */
  serverAddress : string = "http://localhost:9000";

  /**
   * Retrieve all products.
   * @returns An array of all products available.
   */
  getAllProducts() {
    return this.httpClient.get(`${this.serverAddress}/product`);    
  }
}
