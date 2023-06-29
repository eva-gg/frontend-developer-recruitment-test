import { GetSeasonData } from '@/entities/season/types';
import { api } from '@/utils/api';

export const getSeasons: Promise<GetSeasonData> = api.get('/seasons');
