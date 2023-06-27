import { api } from '@/utils/api';
import { Game } from '@/entities/games/types';

export const getGames = (): Promise<Game[]> => api.get('/games');
