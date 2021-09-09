import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe1',
  templateUrl: './tictactoe1.component.html',
  styleUrls: ['./tictactoe1.component.scss']
})
export class Tictactoe1Component implements OnInit {
  /////////////////////////////////////////////////////////////////
  // Tic Tac Toe area
  whoTurn: string;
  gameWon: string;
  board: string[][];
  badMove: boolean;

  ngOnInit() {
    this.onStartOver();
    // setTimeout(() => {
    //   this.board = [
    //     ['❎', '🟩', '❎'],
    //     ['❎', '⏺', '⏺'],
    //     ['🟩', '🟩', '⏺'],
    //   ];
    // }, 1000);
  }

  onStartOver() {
    this.board = [
      ['🟩', '🟩', '🟩'],
      ['🟩', '🟩', '🟩'],
      ['🟩', '🟩', '🟩'],
    ];
    this.gameWon = '';
    this.whoTurn = '❎';
  }

  setPlayerTurn(player: string): string {
    if (player == '❎') return '⏺';
    return '❎';
  }

  onSetLocation(player: string, x: number, y: number) {
    if (this.gameWon) return;
    if (this.board[x][y] != '🟩') {
      this.badMove = true;
      return;
    }
    this.badMove = false;
    this.board[x][y] = player;
    this.whoTurn = this.setPlayerTurn(this.whoTurn);
    this.checkForWinner();
  }

  checkForWinner() {
    this.gameWon = '';
    let playerX = 0;
    let playerO = 0;

    // vertical
    for (let x = 0; x < 3; x++) {
      playerX = 0;
      playerO = 0;
      for (let y = 0; y < 3; y++) {
        if (this.board[y][x] == '❎') {
          playerX++;
        } else if (this.board[y][x] == '⏺') {
          playerO++;
        }

        if (playerX == 3) {
          this.gameWon = '❎';
        } else if (playerO == 3) {
          this.gameWon = '⏺';
        }

        if (this.gameWon) return;
      }
    }

    // horizontal
    for (let y = 0; y < 3; y++) {
      playerX = 0;
      playerO = 0;
      for (let x = 0; x < 3; x++) {
        if (this.board[y][x] == '❎') {
          playerX++;
        } else if (this.board[y][x] == '⏺') {
          playerO++;
        }

        if (playerX == 3) {
          this.gameWon = '❎';
        } else if (playerO == 3) {
          this.gameWon = '⏺';
        }

        if (this.gameWon) return;
      }
    }

    // Diagonal to right
    let x = 0;
    playerX = 0;
    playerO = 0;
    for (let y = 0; y < 3; y++) {
      if (this.board[y][x] == '❎') {
        playerX++;
      } else if (this.board[y][x] == '⏺') {
        playerO++;
      }

      if (playerX == 3) {
        this.gameWon = '❎';
      } else if (playerO == 3) {
        this.gameWon = '⏺';
      }

      if (this.gameWon) return;
      x++;
    }

    // Diagonal from right
    x = 2;
    playerX = 0;
    playerO = 0;
    for (let y = 0; y < 3; y++) {
      if (this.board[y][x] == '❎') {
        playerX++;
      } else if (this.board[y][x] == '⏺') {
        playerO++;
      }

      if (playerX == 3) {
        this.gameWon = '❎';
      } else if (playerO == 3) {
        this.gameWon = '⏺';
      }

      if (this.gameWon) return;
      x--;
    }

    let slotsFull = 0;
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (this.board[y][x] != '🟩') {
          slotsFull++;
        }
      }
    }
    if (slotsFull == 9) {
      this.gameWon = 'Nobody';
    }
  }
}
