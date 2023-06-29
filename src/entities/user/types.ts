export interface User {
  id: number;
  username: string;
  displayName: string;
  email: string;
}

export type GetUserData = {
  data: User;
}
