import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  user : User = {
    id: 0,
    username: '',
    password: '',
    balance: 0,
    cart: []
  }

  constructor(
    private userService : UserService,
    private modalService : NgbModal
  ) {}

  registerSubmit() {
    this.userService.register(this.user).subscribe(json => {
      this.user = json as User;
      console.log(this.user);
    })
    this.modalService.dismissAll();
  
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
      title: 'Registeration successful!'
    })
  }

}
