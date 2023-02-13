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
}
export const sessionsService = new SessionsService()