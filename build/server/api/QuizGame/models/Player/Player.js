"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerStats_1 = __importDefault(require("./PlayerStats"));
var Player = /** @class */ (function () {
    function Player(id, displayName, password, status, stats, history) {
        this.status = PlayerStatus.Offline;
        this.id = id;
        this.displayName = displayName;
        this.password = password;
        this.status = status || PlayerStatus.Offline;
        this.stats = stats || new PlayerStats_1.default();
        this.history = history || [];
    }
    Player.prototype.setStatus = function (status) {
        this.status = status;
    };
    Player.prototype.authenticate = function (displayName, password) {
        if (this.displayName === displayName && this.password === password)
            return true;
        return false;
    };
    return Player;
}());
exports.default = Player;
