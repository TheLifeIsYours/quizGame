const fs = require('fs');

import Player from '../models/Player/Player'
import GameData from './gameData.json'
import PlayerData from './players.json'

export default new class PlayerDataController {
  write(data: Player[]) { 
    fs.writeFileSync('./players.json', JSON.stringify(data))
  }
}

export { GameData, PlayerData }