export interface Game {
  id: number;
  name: string;
  shortName: string;
  maxPlayer?: 12;
  minPlayer?: 2;
}

export type GetGamesData = { data: Game[] }
