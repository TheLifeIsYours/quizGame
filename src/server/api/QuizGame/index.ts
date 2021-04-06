import Session from "./models/Session/Session"
import Game from "./models/Game/Game"
import Alternative from "./models/Alternative/Alternative"

import PlayerDataController, { GameData, PlayerData } from './data'
import Player from "./models/Player/Player"

export default new class QuizzGame {
  sessions: Session[] = []
  players: Player[] = []
  games: Game[] = []

  initGames() {
    this.games = GameData.games.map(game => new Game(game))
  }

  getSessions(): Session[] {
    return this.sessions
  }

  createSession(playerId: String, gameId: String): Session {
    const owner: Player = this.players.find(p => p.id === playerId)
    const game = this.getGame(gameId)
    const session = new Session(owner, game)

    this.sessions.push(session)
    return session
  }

  initPlayers() {
    
  }

  createPlayer(playerId: String, displayName: String, password: String) {
    const player = new Player(playerId, displayName, password)
    this.players.push(player)
  }

  getPlayer(playerId: String): Player { 
    return this.players.find(p => p.id === playerId)
  }

  storePlayerData() {
    PlayerDataController.write(this.players)
  }

  getGame(gameId: String): Game {
    return this.games.find(g => g.id === gameId)
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