import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  @Input() profiles!: Profile[];
  currentUserId!: number;
  @Output() activeUserEvent = new EventEmitter<number>();
}
