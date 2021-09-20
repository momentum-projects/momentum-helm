import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent implements OnInit {
  constructor(
    public profilesService: ProfilesService,
    public loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.loginEventEmitter.subscribe((value: boolean) => {
      // login service event
      this.profilesService.load();
    });
  }

  isCurrentUser(profileId: number) {
    return this.loginService.getCurrentUser() == profileId;
  }
  isConnected(profileId: number) {
    return this.profilesService.isConnected(
      this.loginService.getCurrentUser(),
      profileId
    );
  }
}
