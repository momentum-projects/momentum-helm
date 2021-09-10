import { Component, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-connect-button',
  templateUrl: './connect-button.component.html',
  styleUrls: ['./connect-button.component.scss'],
})
export class ConnectButtonComponent {
  @Input() profileId!: number;
  @Input() profile!: number;

  constructor(public profileService: ProfileService) {}

  alterConnection() {
    if (
      !this.profileObject?.connections.find(
        (num) => num == this.currentActiveUser
      )
    ) {
      if (this.currentActiveUser && this.profileObject) {
        this.profileService.connect(
          this.currentActiveUser,
          this.profileObject.id
        );
      }
    } else {
      if (this.currentActiveUser && this.profileObject) {
        this.profileService.disconnect(
          this.currentActiveUser,
          this.profileObject.id
        );
      }
    }
  }

  get currentActiveUser() {
    return this.profileService.getCurrentUserLoggedIn()
      ? this.profileService.getCurrentUserLoggedIn()
      : false;
  }

  get buttonTextString() {
    if (this.currentActiveUser) {
      return this.profileObject?.connections.includes(this.currentActiveUser)
        ? 'Disconnect'
        : 'Connect';
    } else {
      return null;
    }
  }

  get profileObject() {
    return this.profileService.getProfile(this.profile);
  }
}
