import { Injectable } from '@angular/core';
import { ProfilesService } from './profiles.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  currentUser = 1;

  constructor(public profilesService: ProfilesService) {
    this.currentUser =
      parseInt(localStorage.getItem('USER') || '0') ||
      this.getCurrentProfile().id;
  }

  getCurrentUser() {
    return this.currentUser;
  }
  setCurrentUser(user: number) {
    this.currentUser = user;
    localStorage.setItem('USER', this.currentUser.toString());
  }
  getCurrentProfile() {
    return (
      this.profilesService.getProfile(this.currentUser) ||
      this.profilesService.getProfiles()[0]
    );
  }
}
