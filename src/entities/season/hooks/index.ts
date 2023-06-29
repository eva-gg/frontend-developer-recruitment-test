import { getSeasons } from '@/entities/season/services';
import { useQuery } from '@tanstack/vue-query';

export const seasonQueryName = 'seasons';

export const useGetSeasonsQuery = (options: any = {}) => useQuery({
  queryKey: [seasonQueryName],
  queryFn: () => getSeasons,
  ...options,
});
