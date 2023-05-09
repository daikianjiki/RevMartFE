import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedinUser : User = {
    id: 0,
    username: '',
    password: '',
    balance: 0,
    cart: []
  }

  constructor(private httpClient : HttpClient) { }

  ev : string = "http://localhost:9000";

  register(user : User) {
    return this.httpClient.post(`${this.ev}/user/register`, user);
  }

  login(user : User) {
    return this.httpClient.post(`${this.ev}/user/login`, user);
  }

  addToCart(uid : number, pid : number, user : User) {
    return this.httpClient.post(`${this.ev}/user/${uid}/addProduct/${pid}`, user);
  }

  removeFromCart(uid : number, pid : number, user : User){
    return this.httpClient.post(`${this.ev}/user/${uid}/removeProduct/${pid}`, user)
  }

  getUserById(id : number) {
    return this.httpClient.get(`${this.ev}/user/${id}`)
  }

  checkout(id : number, user : User) {
    return this.httpClient.patch(`${this.ev}/user/${id}/emptyCart`, user)
  }

}
