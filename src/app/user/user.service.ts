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
    // localStorage.getItem("[user]");
    return !!this.user;
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      resolve(this.isLogged);
    });
    return promise;
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
      let user = {} as User;
      user = Object.values(users).filter(
        (usr: User) => usr.password === password && usr.email === email
      )[0];

      if (!user) {
        alert('Wrong credentials');
      } else {
        this.user = user;
        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
      }
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
      this.api.updateUser(user, userId).subscribe(console.log);

      this.user = undefined;
      localStorage.removeItem(this.USER_KEY);
    });
  }

  delete(user: User) {
    let userId: string = '';
    this.api.getUsers().subscribe((users) => {
      for (let [id, user] of Object.entries(users)) {
        if (this.user?.email === user.email) {
          userId = id;
        }
      }
      this.api.deleteUser(userId).subscribe(console.log);

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
