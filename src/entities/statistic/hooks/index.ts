import { GetStatisticUserData } from '@/entities/statistic/type';
import { useQuery } from '@tanstack/vue-query';

import { getStatisticByUser } from '@/entities/statistic/services';
import { Ref } from 'vue';

const statisticQueryName = 'statistics';

export const useGetStatisticsByUser = (
  data: Ref<GetStatisticUserData>,
  options = {},
) => useQuery({
  queryKey: [statisticQueryName, data.value],
  queryFn: () => getStatisticByUser(data.value),
  ...options,
});
