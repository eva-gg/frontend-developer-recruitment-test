export type GameHistoryPlayer = {
    id: number,
    userId: number,
    data: {
        niceName: string,
        rank: number,
        team: string,
        score: number,
        outcome: string
    }
}

export type GameHistoryTeam = {
    score: number,
    name: string
}

export interface GameHistory {
    id: number,
    createdAt: Date,
    data: {
        gameId: number,
        duration: number,
        mode: string,
        map: string,
        outcome: null,
        success: false,
        teamOne: GameHistoryTeam,
        teamTwo: GameHistoryTeam,
    },
    players: GameHistoryPlayer[],
}
