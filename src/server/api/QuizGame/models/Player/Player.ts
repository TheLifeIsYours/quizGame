import Game from "../Game/Game"
import PlayerStats from "./PlayerStats"

export default class Player implements IPlayer {
  
  public id: String
  public displayName: String
  private password: String
  public status: PlayerStatus = PlayerStatus.Offline
  public stats: PlayerStats
  public history: Game[]

  constructor(id: string, displayName: string, password: string, status?: PlayerStatus, stats?: PlayerStats, history?: Game[]) {
    this.id = id
    this.displayName = displayName
    this.password = password
    this.status = status || PlayerStatus.Offline
    this.stats = stats || new PlayerStats()
    this.history = history || []
  }

  public setStatus(status: PlayerStatus) {
    this.status = status
  }

  public authenticate(displayName: String, password: String): Boolean {
    if(this.displayName === displayName && this.password === password) return true
    return false
  }
}