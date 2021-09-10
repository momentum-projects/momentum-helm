import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { ProfilesService } from './profiles.service';

type PageName = 'profile' | 'connections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'linkme-david';

  pageSelected: PageName = 'profile';

  constructor(
    public profilesService: ProfilesService,
    public loginService: LoginService
  ) {}

  get pageName() {
    return this.pageSelected;
  }

  changePage(name: PageName) {
    this.pageSelected = name;
  }
}
