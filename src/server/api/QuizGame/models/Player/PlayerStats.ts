export default class PlayerStats implements IPlayerStats {
  public played: number
  public wins: number
  public losses: number

  constructor()
  constructor(gameStats?: IPlayerStats) {
    this.played = gameStats?.played || 0
    this.wins = gameStats?.wins || 0
    this.losses = gameStats?.losses || 0
  }

  incrementPlayed() {
    this.played++
  }

  incrementWins() {
    this.wins++
  }

  incrementLosses() {
    this.losses++
  }
}