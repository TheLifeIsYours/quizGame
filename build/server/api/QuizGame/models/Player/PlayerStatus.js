"use strict";
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus[PlayerStatus["Offline"] = 0] = "Offline";
    PlayerStatus[PlayerStatus["Online"] = 1] = "Online";
    PlayerStatus[PlayerStatus["Lobby"] = 2] = "Lobby";
    PlayerStatus[PlayerStatus["Playing"] = 3] = "Playing";
})(PlayerStatus || (PlayerStatus = {}));
