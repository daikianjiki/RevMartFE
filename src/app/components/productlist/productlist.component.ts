import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

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
      this.userService.loggedinUser = json as User;
    })
    console.log(`${user.cart[pid-1].name} was added to the cart`);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Item added to cart'
    })
  }
}
