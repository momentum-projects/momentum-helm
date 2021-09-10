import { Component, OnInit } from '@angular/core';
import { Profile, ProfileService } from '../services/profile.service';
import { AuthService } from '../services/auth.service';

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
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.profiles = this.allProfileData;
  }

  get allProfileData() {
    return this.profileService.profiles;
  }

  logout() {
    this.profileService.accountLogout(
      this.profileService.getCurrentUserLoggedIn()
    );
    this.auth.logout();
  }
}
