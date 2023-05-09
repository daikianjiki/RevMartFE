import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{

  products : Product[] = [];

  constructor(
    private productService : ProductService,
    public userService : UserService) {}

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe(json => {
        this.products = json as Product[]; 
        console.log(this.products);
      })
  }

  addToCart(uid : number, pid : number, user : User) {
    this.userService.addToCart(uid, pid, user).subscribe( json => {
      this.userService.loggedinUser = json as any;
      console.log(`${user.cart[pid-1].name} was added to the cart`);
      console.log(user.cart);
    })
  }
}
