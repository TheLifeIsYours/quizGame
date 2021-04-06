import Player from '../Player/Player'
import Game from '../Game/Game'

export default class Session {
  id: String
  owner: Player
  players: Player[]
  game: Game
  status: SessionStatus

  constructor(owner: Player, game: Game) { 
    this.id = owner.id
    this.owner = owner
    this.game = game
    this.players = []
    this.status = SessionStatus.Lobby
  }

  setGame(game: Game) { 
    this.game = game
  }

  addPlayer(player: Player) {
    this.players.push(player)
    player.setStatus(PlayerStatus.Playing)
  }

  setStatus(status: SessionStatus) {
    this.status = status
  }
}