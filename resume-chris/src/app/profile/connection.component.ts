import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Profile from '../profile.model';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent {
  @Input() connection!: number[];
  @Input() profiles: Profile[];
  @Output() newConnectionEvent = new EventEmitter<number>();

  newConnection: number = 0;
  onNewConnection(connection: number) {
    this.newConnectionEvent.emit(connection);
  }
}
