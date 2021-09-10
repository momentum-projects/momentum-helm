import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile, ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() profile!: number;

  constructor(public profileService: ProfileService) {}

  get profileObject() {
    return this.profileService.getProfile(this.profile);
  }
}
