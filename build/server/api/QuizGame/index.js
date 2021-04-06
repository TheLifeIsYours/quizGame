"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Session_1 = __importDefault(require("./models/Session/Session"));
var Game_1 = __importDefault(require("./models/Game/Game"));
var data_1 = __importStar(require("./data"));
var Player_1 = __importDefault(require("./models/Player/Player"));
exports.default = new /** @class */ (function () {
    function QuizzGame() {
        this.sessions = [];
        this.players = [];
        this.games = [];
    }
    QuizzGame.prototype.initGames = function () {
        this.games = data_1.GameData.games.map(function (game) { return new Game_1.default(game); });
    };
    QuizzGame.prototype.getSessions = function () {
        return this.sessions;
    };
    QuizzGame.prototype.createSession = function (playerId, gameId) {
        var owner = this.players.find(function (p) { return p.id === playerId; });
        var game = this.getGame(gameId);
        var session = new Session_1.default(owner, game);
        this.sessions.push(session);
        return session;
    };
    QuizzGame.prototype.initPlayers = function () {
    };
    QuizzGame.prototype.createPlayer = function (playerId, displayName, password) {
        var player = new Player_1.default(playerId, displayName, password);
        this.players.push(player);
    };
    QuizzGame.prototype.getPlayer = function (playerId) {
        return this.players.find(function (p) { return p.id === playerId; });
    };
    QuizzGame.prototype.storePlayerData = function () {
        data_1.default.write(this.players);
    };
    QuizzGame.prototype.getGame = function (gameId) {
        return this.games.find(function (g) { return g.id === gameId; });
    };
    return QuizzGame;
}());
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
