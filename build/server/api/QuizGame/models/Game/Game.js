"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Question_1 = __importDefault(require("../Question/Question"));
var Game = /** @class */ (function () {
    function Game(id, title, questions) {
        this.containAnswer = false;
        this.gameState = GameState.Ongoing;
        this.id = id;
        this.title = title;
        this.questions = Array.from(questions);
        this.answeredQuestions = [];
        this.score = 0;
    }
    Game.prototype.initGame = function () {
        var question = this.getRandomQuestion();
        this.setCurrentQuestion(question);
    };
    Game.prototype.getQuestions = function () {
        return this.questions;
    };
    Game.prototype.getStrippedQuestions = function () {
        return this.questions.map(function (_a) {
            var answer = _a.answer, strippedData = __rest(_a, ["answer"]);
            return new Question_1.default(strippedData);
        });
    };
    Game.prototype.getRandomUnasweredQuestion = function () {
        var randomQuestion = this.getRandomQuestion();
        if (this.answeredQuestions.length !== this.questions.length) {
            this.setGameState(GameState.Completed);
        }
        if (this.answeredQuestions.some(function (answeredQuestion) { return answeredQuestion.id === randomQuestion.id; })) {
            return this.getRandomUnasweredQuestion();
        }
        return randomQuestion;
    };
    Game.prototype.getGameState = function () { return this.gameState; };
    Game.prototype.setGameState = function (gameState) { this.gameState = gameState; };
    Game.prototype.getRandomQuestion = function () {
        return this.questions[Math.trunc(Math.random() * this.questions.length)];
    };
    Game.prototype.setCurrentQuestion = function (question) { this.currentQuestion = question; };
    Game.prototype.answerCurrentQuestion = function (alternativeId) {
        var alternative = this.currentQuestion.alternatives.find(function (alternative) { return alternative.id === alternativeId; });
        if (this.currentQuestion.answer === alternative) {
            this.currentQuestion.setStatus(QuestionStatus.Correct);
            this.score++;
        }
        else {
            this.currentQuestion.setStatus(QuestionStatus.Wrong);
            this.score--;
        }
    };
    Game.prototype.skipCurrentQuestion = function () {
        this.currentQuestion.setStatus(QuestionStatus.Skipped);
        this.setCurrentQuestion(this.getRandomUnasweredQuestion());
    };
    return Game;
}());
exports.default = Game;
