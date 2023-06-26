import { GetStatisticUserData } from '@/entities/statistic/type';
import { useQuery } from '@tanstack/vue-query';

import { getStatisticByUser } from '@/entities/statistic/services';

const statisticQueryName = 'statistics';

export const useGetStatisticsByUser = (data: GetStatisticUserData) => useQuery({
  queryKey: [statisticQueryName, { id: 1 }],
  queryFn: () => getStatisticByUser(data),
});
