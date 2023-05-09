import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

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
    private userService : UserService
  ) {}

  registerSubmit() {
    this.userService.register(this.user).subscribe(json => {
      this.user = json as User;
      console.log(this.user);
    })
  }

}
