import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameSquareData } from '../../models/game-data.model';

@Component({
  selector: 'app-tic-tac-toe-square',
  templateUrl: './tic-tac-toe-square.component.html',
  styleUrls: ['./tic-tac-toe-square.component.scss'],
})
export class TicTacToeSquareComponent {
  @Input() gameData!: GameSquareData;
  @Input() squareClickable = false;
  @Input() playerTurn = null;
  @Output() squareClicked = new EventEmitter<GameSquareData>();
  squareText = '⬜';

  constructor() {}

  gameSquareClickUpdate(event: GameSquareData) {
    if (!this.gameData.clickedBy) {
      if (this.playerTurn === 1) {
        this.squareText = '❌';
      } else if (this.playerTurn === 2) {
        this.squareText = '⭕️';
      }
      this.gameData.value = true;
      this.squareClicked.emit(this.gameData);
    }
  }
}
