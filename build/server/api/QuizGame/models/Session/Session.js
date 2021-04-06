"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Session = /** @class */ (function () {
    function Session(owner, game) {
        this.id = owner.id;
        this.owner = owner;
        this.game = game;
        this.players = [];
        this.status = SessionStatus.Lobby;
    }
    Session.prototype.setGame = function (game) {
        this.game = game;
    };
    Session.prototype.addPlayer = function (player) {
        this.players.push(player);
        player.setStatus(PlayerStatus.Playing);
    };
    Session.prototype.setStatus = function (status) {
        this.status = status;
    };
    return Session;
}());
exports.default = Session;
