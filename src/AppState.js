import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  games: [],
  activeGame: {},
  sessions: [],
  activeSession: {},
  players: [],
  activePlayer: {},
  hands: [],
  activeHand: {}
})
