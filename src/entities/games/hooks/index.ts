import { getGames } from '@/entities/games/services';
import { QueryOptions, useQuery } from '@tanstack/vue-query';

export const gamesQueryName = 'games';

export const useGetGamesQuery = (options: QueryOptions = {}) => useQuery({
  queryKey: [gamesQueryName],
  queryFn: () => getGames,
  ...options,
});
