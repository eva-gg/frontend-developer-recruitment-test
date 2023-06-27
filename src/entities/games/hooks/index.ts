import { getGames } from '@/entities/games/services';
import { useQuery } from '@tanstack/vue-query';

export const gamesQueryName = 'games';

export const useGetGamesQuery = () => useQuery({
  queryKey: [gamesQueryName],
  queryFn: () => getGames(),
});
