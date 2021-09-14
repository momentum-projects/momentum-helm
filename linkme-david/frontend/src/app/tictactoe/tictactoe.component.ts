import { Component, OnInit } from '@angular/core';

export enum Move {
  Nothing = 0,
  Ex = 1,
  Oh = 2,
}
@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss'],
})
export class TictactoeComponent {
  squares = [
    Move.Nothing,
    Move.Nothing,
    Move.Nothing,
    Move.Nothing,
    Move.Nothing,
    Move.Nothing,
    Move.Nothing,
    Move.Nothing,
    Move.Nothing,
  ];

  turn: Move = Move.Ex;

  DISPLAY_MOVE = ['--', ' X ', ' O '];

  getSquare(position: number) {
    return this.DISPLAY_MOVE[this.squares[position]];
  }

  clickSquare(position: number) {
    if (this.squares[position] == Move.Nothing && this.winner == Move.Nothing) {
      this.squares[position] = this.turn;
      this.turn = this.turn == Move.Ex ? Move.Oh : Move.Ex;
    }
    console.log(this.winner);
  }
  get winner() {
    const WINNINGS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const win of WINNINGS) {
      const is_winner = this.squares[win[0]];
      if (
        is_winner != Move.Nothing &&
        win.every((pos) => this.squares[pos] == is_winner)
      ) {
        return is_winner;
      }
    }
    return Move.Nothing;
  }
}
