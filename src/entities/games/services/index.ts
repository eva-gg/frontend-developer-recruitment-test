import { api } from '@/utils/api';
import { GetGamesData } from '@/entities/games/types';

export const getGames: Promise<GetGamesData> = api.get('/games');
