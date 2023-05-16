import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit{

  cart : Product[] = [];
  user : User = {
    id: 0,
    username: '',
    password: '',
    balance: 0,
    cart: []
  };

  constructor(public userService : UserService) {}

  /**
   * Initializes the component with a list of product inside the cart.
   */
  ngOnInit(): void {
    this.userService.getUserById(this.userService.loggedinUser.id).subscribe(json => {
      this.user = json as User;
      this.cart = this.user.cart;
      console.log(this.user);
      console.log(this.cart);
    })
  }

  /**
   * Removes a product from a logged-in user's cart.
   * @param uid The user ID
   * @param pid The product ID to be removed from the cart.
   * @param user The user object.
   */
  removeFromCart(uid : number, pid : number, user : User) {
    this.userService.removeFromCart(uid, pid, user).subscribe(json => {
      this.userService.loggedinUser = json as User;

      //Re-initialize the logged-in user's cart.
      this.ngOnInit();
    })
  }

  /**
   * Perform the checkout process for a logged-in user.
   */
  checkout() {
    this.userService.checkout(this.userService.loggedinUser.id, this.user).subscribe(json => {
      this.userService.loggedinUser = json as User;

      //Re-initialize the logged-in user's cart.
      this.ngOnInit();
    })

    // Display a success notifiation using Swal library.
    Swal.fire({
      title:'Your order is complete!',
      text:'Thank you for your business, your order will be available for pickup in 2 hours.',
      icon:'success',
      confirmButtonColor: '#70A9A1'
    })
  }

  /**
   * Add a product to the logged-in user's cart.
   * @param uid The user ID.
   * @param pid The product ID.
   * @param user The user object.
   */
  addToCart(uid : number, pid : number, user : User) {
    this.userService.addToCart(uid, pid, user).subscribe(json => {
      this.userService.loggedinUser = json as User;

      //Re-initialize the logged-in user's cart.
      this.ngOnInit();
    })
  }
}