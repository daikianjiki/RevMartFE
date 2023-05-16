import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Represents a currently logged-in user.
   * This global variable is used to store the state of the user after they log in or update their cart.
   */
  loggedinUser : User = {
    id: 0,
    username: '',
    password: '',
    balance: 0,
    cart: []
  }

  constructor(private httpClient : HttpClient) { }

  /**
   * The address and port of the server where the API endpoints are located.
   */
  serverAddress : string = "http://localhost:9000";

  /**
   * Register a new user.
   * @param user The user object to be registered.
   * @returns The user object after successful registration.
   */
  register(user : User) {
    return this.httpClient.post(`${this.serverAddress}/user/register`, user);
  }

  /**
   * Login a user.
   * @param user The user object containing the login credentials.
   * @returns The user object after successful login.
   */
  login(user : User) {
    return this.httpClient.post(`${this.serverAddress}/user/login`, user);
  }

  /**
   * Add a product to the user's cart.
   * @param uid The user ID.
   * @param pid The product ID to be added to the cart.
   * @param user The user object.
   * @returns The updated user object with the product added to the cart.
   */
  addToCart(uid : number, pid : number, user : User) {
    return this.httpClient.post(`${this.serverAddress}/user/${uid}/addProduct/${pid}`, user);
  }

  /**
   * Removes a product from the user's cart.
   * @param uid The user Id.
   * @param pid The product ID to be removed from the cart.
   * @param user The user object.
   * @returns The updated user object with the product removed from the cart.
   */
  removeFromCart(uid : number, pid : number, user : User){
    return this.httpClient.post(`${this.serverAddress}/user/${uid}/removeProduct/${pid}`, user)
  }

  /**
   * Get a user by their ID.
   * @param id theID of the user to retrieve.
   * @returns The user object with the specified ID.
   */
  getUserById(id : number) {
    return this.httpClient.get(`${this.serverAddress}/user/${id}`)
  }

  /**
   * Perform the checkout process for a user.
   * @param id The Id of the user performing the checkout.
   * @param user The user object.
   * @returns The updated user object after the checkout process.
   */
  checkout(id : number, user : User) {
    return this.httpClient.patch(`${this.serverAddress}/user/${id}/emptyCart`, user)
  }

}
