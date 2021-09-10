import { Component, OnInit } from '@angular/core';
import { ProfileService } from './shared/services/profile.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'resume-harry';

  constructor(
    public profileService: ProfileService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.profileService.profiles = this.profileService.load();
    // this.auth.isLoggedIn = Boolean(
    //   this.profileService.getCurrentUserLoggedIn()
    // );
    this.auth.login();
  }
}
