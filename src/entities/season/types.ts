export const statusTypes = ['PASSED', 'ACTIVE'] as const;

export interface Season {
  id: number;
  from: Date;
  to: Date;
  seasonNumber: number;
  active: boolean;
  status: typeof statusTypes;
}

export type GetSeasonData = { data: Season[] };
