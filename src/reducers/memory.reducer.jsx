import * as _ACTIONS from "../constants";

const INITIAL_STATE = {
  tiles: [],
  isWaiting: false,
  numberOfTries: 0,
  score: 0
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _ACTIONS.START_GAME:
      return {
        ...state,
        isWaiting: false,
        numberOfTries: 0,
        score: 0,
        tiles: [...action.payload]
      };
    case _ACTIONS.FLIP_TILE:
      const { index, tile } = action.payload;
      return {
        ...state,
        tiles: [
          ...state.tiles.slice(0, index),
          { ...tile, flipped: true },
          ...state.tiles.slice(index + 1)
        ]
      };
    case _ACTIONS.TOGGLE_WAITING:
      return {
        ...state,
        isWaiting: action.payload
      };
    case _ACTIONS.CHECK_MATCH:
      const { tiles } = state;
      if (action.payload[0].image === action.payload[1].image) {
        return {
          ...state,
          tiles: tiles.map(tile =>
            tile.image === action.payload[0].image
              ? { ...tile, matched: true }
              : tile
          ),
          score: state.score + 15,
          isWaiting: false
        };
      } else {
        return {
          ...state,
          tiles: tiles.map(tile =>
            tile.image === action.payload[0].image ||
            tile.image === action.payload[1].image
              ? { ...tile, flipped: false }
              : tile
          ),
          isWaiting: false,
          score: state.score - 5
        };
      }
    case _ACTIONS.INCREMENT_TRIES:
      return {
        ...state,
        numberOfTries: state.numberOfTries + 1
      };
    default:
      return state;
  }
};
