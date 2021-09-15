import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { ProfilesService } from './profiles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'linkme-david';

  constructor(
    public profilesService: ProfilesService,
    public loginService: LoginService
  ) {}
}
