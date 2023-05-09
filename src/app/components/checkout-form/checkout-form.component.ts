import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

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

  ngOnInit(): void {
    this.userService.getUserById(this.userService.loggedinUser.id).subscribe(json => {
      this.user = json as User;
      this.cart = this.user.cart;
      console.log(this.user);
      console.log(this.cart);
    })
  }

  removeFromCart(uid : number, pid : number, user : User) {
    this.userService.removeFromCart(uid, pid, user).subscribe(json => {
      this.userService.loggedinUser = json as User;
      this.ngOnInit();
    })
  }

  checkout() {
    this.userService.checkout(this.userService.loggedinUser.id, this.user).subscribe(json => {
      this.userService.loggedinUser = json as User;
      this.ngOnInit();
    })
  }

}
