import { Component, OnInit } from '@angular/core';

enum Move {
  Nothing = 0,
  Ex = 1,
  Oh = 2,
}

@Component({
  selector: 'app-tictactoe2',
  templateUrl: './tictactoe2.component.html',
  styleUrls: ['./tictactoe2.component.scss']
})
export class Tictactoe2Component {
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

  getSquare(position: number) {
    const DISPLAY_MOVE = ['- -', ' X ', ' O '];
    return DISPLAY_MOVE[this.squares[position]];
  }

  clickSquare(position: number) {
    if (this.squares[position] == Move.Nothing && this.winner == Move.Nothing) {
      this.squares[position] = this.turn;
      this.turn = this.turn == Move.Ex ? Move.Oh : Move.Ex;
    }
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
        console.log(win);
        return is_winner;
      }
    }
    return Move.Nothing;
  }
}
