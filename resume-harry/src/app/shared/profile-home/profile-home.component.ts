import { Component, OnInit } from '@angular/core';
import { Profile, ProfileService } from '../services/profile.service';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss'],
})
export class ProfileHomeComponent implements OnInit {
  title = 'resume-harry';
  profiles: Profile[] = [];

  constructor(
    public profileService: ProfileService,
    public loginService: LoginService,
    public auth: AuthService
  ) {
    this.profiles = this.allProfileData;
  }

  ngOnInit() {}

  get allProfileData() {
    return this.profileService
      .getProfiles()
      .filter((profile) => profile.id !== this.loginService.getCurrentUser());
  }

  get currentUser() {
    return this.loginService.getCurrentProfile()?.id;
  }

  logout() {
    this.loginService.logout(this.loginService.getCurrentUser());
    this.auth.logout();
  }
}
