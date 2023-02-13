import { AppState } from "../AppState"
import { Hand } from "../models/Hand"
import { saveState } from "../utils/LocalStorage"

class HandsService {
  addHand(data) {
    AppState.hands = [...AppState.hands, new Hand(data)]
    AppState.activePlayer.totalScore += data.score
    saveState()
  }
  editHand(data) {
    console.error("[editHand] Not yet set up");
  }
  deleteHand(data) {
    console.error("[deleteHand] Not yet set up");

  }
}
export const handsService = new HandsService()