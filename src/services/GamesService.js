import { AppState } from "../AppState"
import { Game } from "../models/Game"
import { saveState } from "../utils/LocalStorage"

class GamesService {
  addGame(data) {
    AppState.games = [...AppState.games, new Game(data)]
    saveState()
  }
  editGame(data) {
    console.error("Not yet set up");
  }
  deleteGame(data) {
    console.error("Not yet set up");
  }
}
export const gamesService = new GamesService()