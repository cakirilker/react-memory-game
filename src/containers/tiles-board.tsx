import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { bindActionCreators } from "redux";
import * as ACTIONS from "../actions";
import { Tile, UserInfo } from "../components";
import { Memory } from "../interfaces";

type Props = {
  username: string;
  tiles: Memory.ITile[];
  isWaiting: boolean;
  tries: number;
  score: number;
  startGame: () => void;
  flipTile: (tile, index) => void;
  setWaiting: (payload) => void;
  checkMatch: (tiles) => void;
  addUserToScoreboard: (user, score, tries) => void;
  incrementTries: () => void;
};

const mapStateToProps = state => {
  return {
    tiles: state.memory.tiles,
    isWaiting: state.memory.isWaiting,
    username: state.user.username,
    tries: state.memory.numberOfTries,
    score: state.memory.score
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      startGame: ACTIONS.startGame,
      flipTile: ACTIONS.flipTile,
      setWaiting: ACTIONS.setWaiting,
      checkMatch: ACTIONS.checkMatch,
      addUserToScoreboard: ACTIONS.addUserToScoreboard,
      incrementTries: ACTIONS.incrementTries
    },
    dispatch
  );
};
class TilesBoard extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.handleTileClick = this.handleTileClick.bind(this);
  }
  render() {
    const { tries, tiles, score, username, addUserToScoreboard } = this.props;
    if (!username) {
      return <Redirect to="/" />;
    }
    if (tiles.length && tiles.every(tile => tile.matched)) {
      addUserToScoreboard(username, score, tries);
      return <Redirect to="/result" />;
    }
    return (
      <div className="">
        <div className="row">
          <div className="col-12">
            <UserInfo username={username} tries={tries} />
            <div className="tile-board-container">{this.renderTiles()}</div>
          </div>
        </div>
      </div>
    );
  }
  handleTileClick(tile, index) {
    const { isWaiting, flipTile } = this.props;
    if (isWaiting) return;
    flipTile(tile, index);
  }
  renderTiles = () => {
    const { tiles } = this.props;
    return tiles.map((tile, index) => {
      return (
        <Tile
          tile={tile}
          key={index}
          index={index}
          onClickTile={this.handleTileClick}
        />
      );
    });
  };
  componentDidMount() {
    this.props.startGame();
  }
  componentDidUpdate() {
    const {
      tiles,
      setWaiting,
      checkMatch,
      isWaiting,
      incrementTries
    } = this.props;
    const flippedTiles = tiles.filter(t => t.flipped && !t.matched);
    if (flippedTiles.length >= 2 && !isWaiting) {
      setWaiting(true);
      setTimeout(() => {
        checkMatch(flippedTiles);
      }, 300);
      incrementTries();
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TilesBoard);
