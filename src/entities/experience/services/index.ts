import { Experience, GetExperienceByUserData } from '@/entities/experience/types';
import { api } from '@/utils/api';

export const getExperienceByUser = ({ id }: GetExperienceByUserData): Promise<Experience> => api.get(`/users/${ id }/experiences`);
