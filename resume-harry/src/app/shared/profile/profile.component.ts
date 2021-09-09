import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile } from '../services/profile.service';

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

  onAddExperience(experience: string) {
    this.profile.experience.push(experience);
  }

  alterConnection(userId: number) {
    this.newConnectionEvent.emit(userId);
  }
}
