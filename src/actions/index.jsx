import * as _ACTIONS from "../constants";
import tileService from "../data/tile.service";
export const setUsername = username => dispatch => {
  dispatch({
    type: _ACTIONS.SET_USERNAME,
    payload: username
  });
};
export const startGame = () => {
  let tiles = tileService.generateTiles();
  return {
    type: _ACTIONS.START_GAME,
    payload: tiles
  };
};
export const flipTile = (tile, index) => {
  return {
    type: _ACTIONS.FLIP_TILE,
    payload: { tile, index }
  };
};
export const setWaiting = payload => {
  return {
    type: _ACTIONS.TOGGLE_WAITING,
    payload
  };
};
export const checkMatch = payload => {
  return {
    type: _ACTIONS.CHECK_MATCH,
    payload
  };
};
export const addUserToScoreboard = (user, score, tries) => {
  return {
    type: _ACTIONS.ADD_USER_SCOREBOARD,
    payload: { user, score, tries }
  };
};
export const incrementTries = () => {
  return {
    type: _ACTIONS.INCREMENT_TRIES
  };
};
