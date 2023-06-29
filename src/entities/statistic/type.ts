import { User } from '@/entities/user/types';

export interface Statistic {
  gameCount: number;
  gameTime: number;
  gameVictoryCount: number;
  gameDefeatCount: number;
  gameDrawCount: number;
  inflictedDamage: number;
  bestInflictedDamage: number;
  traveledDistance: number;
  traveledDistanceAverage: number;
  bestKillStreak: number;
}

export type GetStatisticUserData = {
  id: User['id'],
}
