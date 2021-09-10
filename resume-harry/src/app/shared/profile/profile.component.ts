import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile, ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() name!: string;
  @Input() currentUserId!: number;
  @Input() profile!: Profile;
  @Output() newConnectionEvent = new EventEmitter<number>();

  constructor(public profileService: ProfileService) {}

  alterConnection(userId: number) {
    this.newConnectionEvent.emit(userId);
  }

  get profileObject() {
    return this.profileService.getProfile(this.profile.userId);
  }
}
