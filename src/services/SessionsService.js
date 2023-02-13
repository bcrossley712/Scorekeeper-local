import { AppState } from "../AppState";
import { Session } from "../models/Session";
import { saveState } from "../utils/LocalStorage";

class SessionsService {
  addSession(data) {
    let newSession = new Session(data)
    AppState.sessions = [...AppState.sessions, newSession]
    saveState()
    return newSession
  }
  archiveSession(data) {
    //NOTE Winner declaration:
    const players = AppState.players.filter(p => p.sessionId == AppState.activeSession.id)
    let topScore = null
    if (AppState.activeGame.lowScoreWins) {
      players.forEach(p => {
        if (topScore == null || p.totalScore < topScore) {
          topScore = p.totalScore
          data.winner = p.name
        } else if (p.totalScore == topScore) {
          data.winner = data.winner + `, ${p.name}`
        }
      })
    } else {
      players.forEach(p => {
        if (topScore == null || p.totalScore > topScore) {
          topScore = p.totalScore
          data.winner = p.name
        } else if (p.totalScore == topScore) {
          data.winner = data.winner + `, ${p.name}`
        }
      })
    }
    const index = AppState.sessions.findIndex(s => s.id == data.id)
    AppState.sessions.splice(index, 1, new Session(data))
    saveState()
  }
  deleteSession(data) {
    console.error("[deleteSession] Not yet set up");
  }
}
export const sessionsService = new SessionsService()  