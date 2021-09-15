import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  currentUserId!: number;

  constructor(
    public loginService: LoginService,
    public profileService: ProfileService,
    public auth: AuthService
  ) {
    this.logIntoAccount();
  }

  logIntoAccount() {
    return this.auth.login();
  }
}
