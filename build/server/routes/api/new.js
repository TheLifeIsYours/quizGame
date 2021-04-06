"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    req.session.gameId = req.session.gameId || "gameId#" + Math.round(Math.random() * Date.now());
    if (req.session.redirect) {
        console.log("redirect", req.session.redirect);
        res.redirect(req.session.redirect);
    }
    res.json({ gameId: req.session.gameId });
});
exports.default = router;
