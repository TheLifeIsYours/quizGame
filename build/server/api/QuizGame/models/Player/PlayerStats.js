"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerStats = /** @class */ (function () {
    function PlayerStats(gameStats) {
        this.played = (gameStats === null || gameStats === void 0 ? void 0 : gameStats.played) || 0;
        this.wins = (gameStats === null || gameStats === void 0 ? void 0 : gameStats.wins) || 0;
        this.losses = (gameStats === null || gameStats === void 0 ? void 0 : gameStats.losses) || 0;
    }
    PlayerStats.prototype.incrementPlayed = function () {
        this.played++;
    };
    PlayerStats.prototype.incrementWins = function () {
        this.wins++;
    };
    PlayerStats.prototype.incrementLosses = function () {
        this.losses++;
    };
    return PlayerStats;
}());
exports.default = PlayerStats;
