"use strict";
var GameState;
(function (GameState) {
    GameState[GameState["Ongoing"] = 0] = "Ongoing";
    GameState[GameState["Completed"] = 1] = "Completed";
    GameState[GameState["Cancelled"] = 2] = "Cancelled";
    GameState[GameState["Paused"] = 3] = "Paused";
})(GameState || (GameState = {}));
