import { AppState } from "../AppState"
import { Hand } from "../models/Hand"
import { saveState } from "../utils/LocalStorage"

class HandsService {
  addHand(data) {
    AppState.hands = [...AppState.hands, new Hand(data)]
    saveState()
  }
}
export const handsService = new HandsService()