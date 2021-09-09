import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-connect-button',
  templateUrl: './connect-button.component.html',
  styleUrls: ['./connect-button.component.scss'],
})
export class ConnectButtonComponent {
  @Input() userId!: number;
  @Output() userIdConnectEvent = new EventEmitter<number>();
  buttonTextString = 'Connect';

  createNewConnection() {
    this.userIdConnectEvent.emit(this.userId);
  }
}
