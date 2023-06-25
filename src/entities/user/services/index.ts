import { User } from '@/entities/user/types';
import { api } from '@/utils/api';

export const getCurrentUser: Promise<User> = api.get('/auth/me');
