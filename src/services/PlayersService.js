import { AppState } from "../AppState"
import { Player } from "../models/Player"
import { saveState } from "../utils/LocalStorage"

class PlayersService {
  addPlayer(data) {
    AppState.players = [...AppState.players, new Player(data)]
    saveState()
  }
  editPlayer(data) {
    console.error("Not yet set up");
  }
  deletePlayer(data) {
    console.error("Not yet set up");
  }
}

export const playersService = new PlayersService()