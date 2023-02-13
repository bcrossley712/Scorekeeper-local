import { generateId } from "../utils/generateId"

export class Hand {
  constructor(data) {
    this.id = data.id || generateId()
    this.bid = data.bid || 0
    this.take = data.take || 0
    this.score = data.score || 0
    this.trump = data.trump
    this.playerId = data.playerId
    this.sessionId = data.sessionId
    // this.highScore = data.highScore
    // this.createdAt = data.createdAt || new Date()
  }
}