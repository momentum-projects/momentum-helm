import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  currentUserId!: number;

  constructor(
    public profileService: ProfileService,
    public auth: AuthService
  ) {}

  setCurrentUserLoggedIn(index: number) {
    this.profileService.authorizeLogin(index);
    if (index) {
      this.auth.login();
    }
  }
}
