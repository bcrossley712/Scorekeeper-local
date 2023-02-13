import { AppState } from "../AppState";
import { Game } from "../models/Game";

export function saveState() {
  // Save the current proxy state into local storage
  // JSON.Stringiy turns the data into a special version of a string
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
    // the data gets saved as POJOs so has to be turned back into pizza classes
    // ProxyState.lists = data.lists.map(l => new List(l))
    // ProxyState.tasks = data.tasks.map(t => new Task(t))
    AppState.games = data.games.map(g => new Game(g))
  }
}