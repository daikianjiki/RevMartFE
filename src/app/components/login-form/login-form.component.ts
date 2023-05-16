import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  user : User = {
    id: 0,
    username: '',
    password: '',
    balance: 0,
    cart: []
  }
  
  constructor(
    private userService : UserService,
    private modalServie : NgbModal) {}
  
    /**
     * Submit the login form and log in a user.
     */
  loginSubmit() {
    this.userService.login(this.user).subscribe(json => {
      this.userService.loggedinUser = json as any;
      console.log(this.userService.loggedinUser);
    })

    // Dismiss a modal
    this.modalServie.dismissAll();

    // Display a success notification using Swal library.
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Login successful!'
    })
  }
}
