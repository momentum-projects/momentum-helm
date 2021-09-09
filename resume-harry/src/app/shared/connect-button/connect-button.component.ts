import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Profile } from '../services/profile.service';

@Component({
  selector: 'app-connect-button',
  templateUrl: './connect-button.component.html',
  styleUrls: ['./connect-button.component.scss'],
})
export class ConnectButtonComponent {
  @Input() userId!: number;
  @Input() profile!: Profile;
  @Input() currentUserId!: number;
  @Output() newConnectionEvent = new EventEmitter<number>();

  alterConnection(userId: number) {
    this.newConnectionEvent.emit(userId);
  }

  get buttonTextString() {
    return this.profile.connections.includes(this.currentUserId)
      ? 'Disconnect'
      : 'Connect';
  }
}
