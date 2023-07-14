export type Route = {
  id: number,
  title: string,
  route: string,
}

export type Season = {
  id: number,
  from: Date,
  to: Date,
  seasonNumber: number,
  active: boolean,
  status: string,
}