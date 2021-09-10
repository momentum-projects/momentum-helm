import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile, ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  @Output() activeUserEvent = new EventEmitter<number>();
  profiles!: Profile[];
  currentUserId!: number;

  constructor(public profilesService: ProfileService) {}

  ngOnInit() {
    this.profiles = this.profilesService.profiles;
  }

}
