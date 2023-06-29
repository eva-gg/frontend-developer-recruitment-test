import { api } from '@/utils/api';

import { GameHistory } from '@/entities/game-history/types';

export const getGameHistories = (): Promise<GameHistory[]> => api.get('/game-histories');
