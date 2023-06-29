import { useQuery } from '@tanstack/vue-query';
import { getGameHistories } from '@/entities/game-history/services';

const gameHistoriesQueryName = 'gameHistories';

export const useGetGameHistoriesQuery = () => useQuery({
  queryKey: [gameHistoriesQueryName],
  queryFn: () => getGameHistories(),
});
