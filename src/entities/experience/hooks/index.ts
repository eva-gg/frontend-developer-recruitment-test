import { useQuery } from '@tanstack/vue-query';
import { Ref } from 'vue';

import { getExperienceByUser } from '@/entities/experience/services';
import { GetExperienceByUserData } from '@/entities/experience/types';

const experienceQueryName = 'experiences';

export const useGetExperienceByUser = (
  data: Ref<GetExperienceByUserData>,
  options = {},
) => useQuery({
  queryKey: [experienceQueryName, data.value],
  queryFn: () => getExperienceByUser(data.value),
  ...options,
});
