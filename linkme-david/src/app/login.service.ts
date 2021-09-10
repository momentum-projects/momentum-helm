import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  currentUser = 1;

  getCurrentUser() {
    return this.currentUser;
  }
  setCurrentUser(user: number) {
    this.currentUser = user;
  }
}
