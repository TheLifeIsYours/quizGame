"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Question = /** @class */ (function () {
    function Question(questionData) {
        this.status = QuestionStatus.Unanswered;
        this.id = questionData.id;
        this.question = questionData.question;
        this.alternatives = questionData.alternatives;
        this.answer = questionData.answer;
    }
    Question.prototype.getQuestion = function () { return this.question; };
    Question.prototype.getAlternatives = function () { return this.alternatives; };
    Question.prototype.getAnswer = function () { return this.answer; };
    Question.prototype.getStatus = function () { return this.status; };
    Question.prototype.setStatus = function (status) { this.status = status; };
    return Question;
}());
exports.default = Question;
