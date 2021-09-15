export class Player {
  constructor(
    public name: string,
    public color: string,
    public startingPosition: number,
    public remainingTurns: number
  ) {}
}

export interface PlayerSetupInterface {
  player1: Player;
  player2: Player;
  gameSize: number;
}

export const playerSetup = {
  player1: new Player('Player 1', 'red', 0, 4),
  player2: new Player('Player 2', 'blue', 0, 4),
  gameSize: 9,
};
