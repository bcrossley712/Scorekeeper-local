import { generateId } from "../utils/generateId";

export class Session {
  constructor(data) {
    this.id = data.id || generateId()
    this.gameId = data.gameId
    this.archived = data.archived || false
    this.winner = data.winner
    // this.rules = data.rules
    // this.bidding = data.bidding || false
    // this.lowScoreWins = data.lowScoreWins || false
    // this.highScore = data.highScore
    this.createdAt = data.createdAt || new Date()
  }
}