import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  currentUser!: number | undefined;

  constructor(public profileService: ProfileService) {
    this.currentUser =
      parseInt(localStorage.getItem('USER') || 'undefined') ||
      this.getCurrentProfile()?.id;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user: number) {
    this.currentUser = user;
    localStorage.setItem('USER', this.currentUser.toString());
  }

  getCurrentProfile() {
    if (this.currentUser) {
      return this.profileService.getProfile(this.currentUser);
    } else {
      return null;
    }
  }

  logout(index: number | undefined) {
    if (index) {
      this.currentUser = undefined;
      localStorage.setItem('USER', 'undefined');
      const profile = this.profileService.getProfile(index);
      if (profile) {
        profile.isActive = false;
        this.profileService.save();
      }
    } else {
      new Error('Profile does not exist');
    }
  }
}
