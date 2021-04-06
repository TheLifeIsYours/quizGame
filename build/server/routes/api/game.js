"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var QuizGame_1 = __importDefault(require("../../api/QuizGame"));
router.get('/:id', function (req, res) {
    if (req.session.gameId == undefined) {
        req.session.redirect = req.originalUrl;
        res.redirect('/api/new');
    }
    var quizGame = QuizGame_1.default.getGame(req.params.id);
    if (quizGame)
        res.json(__assign({ gameId: req.session.gameId }, quizGame));
    res.status(404);
    res.json({ "message": "game not found" });
});
exports.default = router;
