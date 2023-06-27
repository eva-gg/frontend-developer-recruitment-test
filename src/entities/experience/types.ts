import { Season } from '@/entities/season/types';
import { User } from '@/entities/user/types';

export interface Experience {
  level: number;
  levelProgressionPercentage: number;
  experience: number;
  experienceForNextLevel: number;
  experienceForCurrentLevel: number;
  seasonId: Season['id'];
}

export type GetExperienceByUserData = {
  id: User['id'];
}
