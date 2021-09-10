import { Component, Input } from '@angular/core';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() profile!: number;
  @Input() name!: string;

  constructor(public profilesService: ProfilesService) {}

  get profileObject() {
    return this.profilesService.getProfile(this.profile);
  }
}
