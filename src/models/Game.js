import { generateId } from "../utils/generateId"

export class Game {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.image = data.image
    this.scoring = data.scoring
    this.rules = data.rules
    this.bidding = data.bidding || false
    this.lowScoreWins = data.lowScoreWins || false
    this.highScore = data.highScore
  }
}

// export const GameSchema = new Schema(
//   {
//     title: { type: String, required: true },
//     image: { type: String },
//     scoring: { type: String },
//     rules: { type: String },
//     creatorId: { type: ObjectId, required: true, ref: 'Profile' },
//     bidding: { type: Boolean, default: false },
//     lowScoreWins: { type: Boolean, default: false },
//     highScore: { type: Number },
//     bestPlayer: { type: String }
//   },
//   { timestamps: true, toJSON: { virtuals: true } }
// )