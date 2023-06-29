import { api } from '@/utils/api';

import { GetStatisticUserData, Statistic } from '@/entities/statistic/type';

export const getStatisticByUser = ({ id }: GetStatisticUserData): Promise<Statistic> => api.get(`/users/${ id }/statistics`);
