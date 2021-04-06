"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerData = exports.GameData = void 0;
var fs = require('fs');
var gameData_json_1 = __importDefault(require("./gameData.json"));
exports.GameData = gameData_json_1.default;
var players_json_1 = __importDefault(require("./players.json"));
exports.PlayerData = players_json_1.default;
exports.default = new /** @class */ (function () {
    function PlayerDataController() {
    }
    PlayerDataController.prototype.write = function (data) {
        fs.writeFileSync('./players.json', JSON.stringify(data));
    };
    return PlayerDataController;
}());
