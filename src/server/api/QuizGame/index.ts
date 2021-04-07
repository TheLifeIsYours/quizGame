import Session from "./models/Session/Session"
import IGame from "./models/Game/IGame"
import Game from "./models/Game/Game"
import Alternative from "./models/Alternative/Alternative"

import PlayerDataController, { GameData, PlayerData } from './data'
import Player from "./models/Player/Player"

export default new class QuizzGame {
  sessions: Session[] = []
  players: Player[] = []
  games: Game[] = []

  initGames() {
    this.games = GameData.games.map((gameData: IGame) => Game.fromJSON(gameData))
  }

  getSessions(): Session[] {
    return this.sessions
  }

  createSession(playerId: string, gameId: string): Session {
    const player = this.players.find(p => p.id === playerId)

    if(!player) {
      throw new Error(`Player by id ${playerId} not found`)
    }

    const game = this.getGame(gameId)
    const session = new Session(player, game)

    this.sessions.push(session)
    return session
  }

  initPlayers() {
    
  }

  createPlayer(playerId: string, displayName: string, password: string) {
    const player = new Player(playerId, displayName, password)
    this.players.push(player)
  }

  getPlayer(playerId: string): Player { 
    const player = this.players.find(p => p.id === playerId)
    
    if(player) {
      return player
    }

    throw new Error(`Player by ${playerId} not found`)
  }

  storePlayerData() {
    PlayerDataController.write(this.players)
  }

  getGame(gameId: string): Game {
    const game = this.games.find(g => g.id === gameId)
    
    if(game) {
      return game
    }

    throw new Error(`Game by id ${gameId}, not found`)
  }

}

// const getGame = (gameId, containAnswer) => {
//   const gameData = GameData.games.find(({id}) => id === Number(gameId))
//   if(gameData) return new Game(gameData)

//   return undefined
// }

// const listGames = () => GameData.games.map(({id, title}) => ({id, title}))

// const getAnswers = (gameId): Array<Alternative> => {
//   const gameData: Game = GameData.games.find(({id}) => id == gameId)
//   if(gameData) return gameData.answers

//   return undefined
// }

// const getCorrectAnswer = (gameId, questionId) => {
//   const gameData = GameData.games.find(({id}) => id == gameId)
//   if(gameData) {
//     const questions = gameData.questions.find(({id}) => id == questionId)
//     if(questions) {
//       return questions.answers
//     }
//   }

//   return undefined
// }

// exports.addGame = addGame
// exports.getGame = getGame
// exports.listGames = listGames
// exports.getAnswers = getAnswers
// exports.getCorrectAnswer = getCorrectAnswer

// module.exports = {addGame, getGame, listGames, getAnswers, getCorrectAnswer}