import * as _ACTIONS from "../constants";

const INITIAL_STATE = {
  username: "",
  scoreboard: JSON.parse(localStorage.getItem("scoreboard")) || []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _ACTIONS.SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case _ACTIONS.ADD_USER_SCOREBOARD:
      const scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];
      const { user, score, tries } = action.payload;
      const updatedScoreboard = [
        ...scoreboard.filter(x => x.username !== user),
        { username: user, score, tries }
      ].sort((a, b) => (b.score > a.score ? 1 : -1));
      localStorage.setItem("scoreboard", JSON.stringify(updatedScoreboard));
      return {
        ...state,
        scoreboard: JSON.parse(localStorage.getItem("scoreboard"))
      };
    default:
      return state;
  }
};
