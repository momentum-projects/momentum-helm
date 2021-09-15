import { Component } from '@angular/core';
import { GameData, GameSquareData } from '../../models/game-data.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-tic-tac-toe-home',
  templateUrl: './tic-tac-toe-home.component.html',
  styleUrls: ['./tic-tac-toe-home.component.scss'],
})
export class TicTacToeHomeComponent {
  gameGridClickable = false;
  gameData = GameData;
  playerTurn = 0;
  playerOneSquares: number[] = [];
  playerTwoSquares: number[] = [];
  startButtonDisabled = false;
  gameOver = false;
  winningPlayer!: number;

  constructor() {}

  updateGameData(event: GameSquareData): void {
    // @ts-ignore
    this.gameData = _.reduce(
      this.gameData,
      (result: GameSquareData[], value) => {
        if (event.id === value.id) {
          result.push(
            _.merge(value, { value: event.value, clickedBy: this.playerTurn })
          );
        } else {
          // @ts-ignore
          result.push(value);
        }
        return result;
      },
      []
    );

    if (this.playerTurn === 1) {
      this.playerOneSquares.push(event.id);
      this.checkWinner(this.playerOneSquares);
      ++this.playerTurn;
    } else if (this.playerTurn === 2) {
      this.playerTwoSquares.push(event.id);
      this.checkWinner(this.playerTwoSquares);
      --this.playerTurn;
    }
  }

  checkWinner(playerSquares: number[]) {
    const potentialWins = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    _.each(potentialWins, (value) => {
      if (_.intersection(value, playerSquares).length === 3) {
        this.gameOver = true;
        this.winningPlayer = this.playerTurn;
        this.gameGridClickable = false;
      }
    });
  }

  startGame(): void {
    this.playerTurn = 1;
    this.gameGridClickable = true;
    this.startButtonDisabled = true;
  }
}
