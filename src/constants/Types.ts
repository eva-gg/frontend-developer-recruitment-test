export type Route = {
  id: number,
  title: string,
  route: string,
}

export type Season = {
  id: number,
  from: Date,
  to: Date,
  seasonNumber: number,
  active: boolean,
  status: string,
}

export type User = {
  username: string,
  displayName: string,
  email: string,
  seasonXp: {
    level: number,
    levelProgressionPercentage: number,
    experience: number,
    experienceForNextLevel: number,
    experienceForCurrentLevel: number,
    seasonId: number,
  }
}

export type UserStats = {
  gameCount: number,
  gameTime: number,
  gameVictoryCount: number,
  gameDefeatCount: number,
  gameDrawCount: number,
  inflictedDamage: number,
  bestInflictedDamage: number,
  traveledDistance: number,
  traveledDistanceAverage: number,
  bestKillStreak: number,
}

export type Team =  {
  score: number,
  name: string,
}

export type Player = {
  data: {
    niceName: string,
    outcome: string,
    rank: string,
    score: number,
    team: Team,
  },
  id: number,
  userId: number,
}

export type Game = {
  createdAt: string,
  data: {
    gameId: number,
    duration: number,
    mode: string,
    map: string,
    outcome: null,
    success: boolean,
    teamOne: Team,
    teamTwo: Team,
  }
  id: number,
  players: Array<Player>
}