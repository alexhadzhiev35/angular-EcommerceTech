import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  get profileDetails(): User | undefined {
    return this.user;
  }

  constructor(private api: ApiService) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  //FIX<E
  login(email: string, password: string) {
    this.api.getUsers().subscribe((users) => {
      this.user = Object.values(users).filter(
        (usr: User) => usr.password === password && usr.email === email
      )[0];
      localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    });
  }

  edit(user: User) {
    let userId: string = '';
    this.api.getUsers().subscribe((users) => {
      for (let [id, user] of Object.entries(users)) {
        if (this.user?.email === user.email) {
          userId = id;
        }
      }
      console.log(userId);
      this.api.updateUser(user, userId).subscribe(console.log);

      this.user = undefined;
      localStorage.removeItem(this.USER_KEY);
    });
  }

  register(user: User) {
    this.api.addUser(user).subscribe(console.log);
    this.user = user;

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
