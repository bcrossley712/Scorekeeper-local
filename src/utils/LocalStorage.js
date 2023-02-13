import { AppState } from "../AppState";
import { Game } from "../models/Game";
import { Hand } from "../models/Hand";
import { Player } from "../models/Player";
import { Session } from "../models/Session";

export function saveState() {
  // Save the current proxy state into local storage
  // JSON.Stringify turns the data into a special version of a string
  localStorage.setItem('Scorekeeper', JSON.stringify({
    games: AppState.games,
    activeGame: AppState.activeGame,
    sessions: AppState.sessions,
    activeSession: AppState.activeSession,
    players: AppState.players,
    activePlayer: AppState.activePlayer,
    hands: AppState.hands,
    activeHand: AppState.activeHand
  }))
}
export function loadState() {
  // get data from local storage by same name saved
  // JSON.parse reads that special string and turns it back into real data
  let data = JSON.parse(localStorage.getItem('Scorekeeper'))
  console.log('loaded data', data)
  // check for if data exists, cause we only want to try this if it does, will error otherwise
  if (data != null) {
    // the data gets saved as POJOs so has to be turned back into classes
    AppState.games = data.games.map(g => new Game(g))
    AppState.activeGame = new Game(data.activeGame)
    AppState.sessions = data.sessions.map(s => new Session(s))
    AppState.activeSession = new Session(data.activeSession)
    AppState.players = data.players.map(p => new Player(p))
    AppState.activePlayer = new Player(data.activePlayer)
    AppState.hands = data.hands.map(h => new Hand(h))
    AppState.activeHand = new Hand(data.activeHand)
  }
}