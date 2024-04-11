import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) {}

  user = {} as User;

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    // if (form.value.password !== form.value.rePass) {
    //   return;
    // }

    this.user = {
      username: form.value.username,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      dateOfBirth: form.value.dateOfBirth,
      email: form.value.email,
      password: form.value.password,
      phoneNumber: form.value.phoneNumber,
    };

    this.userService.register(this.user);
    this.router.navigate(['/home']);
  }
}
