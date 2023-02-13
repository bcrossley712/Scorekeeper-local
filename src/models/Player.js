import { generateId } from "../utils/generateId";

export class Player {
  constructor(data) {
    this.id = data.id || generateId()
    this.sessionId = data.sessionId
    this.name = data.name
    this.totalScore = data.totalScore || 0
    // this.rules = data.rules
    // this.bidding = data.bidding || false
    // this.lowScoreWins = data.lowScoreWins || false
    // this.highScore = data.highScore
    // this.createdAt = data.createdAt || new Date()
  }
}