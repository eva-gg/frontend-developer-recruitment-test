import { getSeasons } from '@/entities/season/services';
import { useQuery } from '@tanstack/vue-query';

export const seasonQueryName = 'seasons';

export const useGetSeasonsQuery = () => useQuery({
  queryKey: [seasonQueryName],
  queryFn: () => getSeasons,
});
