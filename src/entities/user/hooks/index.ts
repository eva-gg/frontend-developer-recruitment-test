import { getCurrentUser } from '@/entities/user/services';
import { useQuery } from '@tanstack/vue-query';

export const userQueryName = 'users';
export const useGetCurrentUserQuery = () => useQuery({
  queryKey: [userQueryName, 'me'],
  queryFn: () => getCurrentUser,
});
