import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  user = {} as User;

  edit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    let user = {
      username: form.value.username,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      dateOfBirth: form.value.dateOfBirth,
      email: form.value.email,
      password: form.value.password,
      phoneNumber: form.value.phoneNumber,
    };

    this.userService.edit(user);
    this.router.navigate(['/auth/login']);
  }

  ngOnInit(): void {
    if (this.userService.profileDetails) {
      this.user = this.userService.profileDetails;
    }

    console.log(this.user);
  }
}
