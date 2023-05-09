import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';

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
  
  constructor( private userService : UserService ) {}
  
  loginSubmit() {
    this.userService.login(this.user).subscribe(json => {
      this.userService.loggedinUser = json as any;
      console.log(this.userService.loggedinUser);
    })
  }

}
