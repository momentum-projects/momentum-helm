import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile } from '../services/profile.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  @Input() profiles!: Profile[];
  @Output() activeUserEvent = new EventEmitter<number>();
  currentUserId!: number;
}
