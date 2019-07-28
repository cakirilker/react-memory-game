import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as ACTIONS from "../actions";
type Props = {
  username: string;
  tries: number;
  scoreboard: [];
  score: number;
  addUserToScoreboard: (user, score, tries) => void;
  startGame: () => void;
};
const mapStateToProps = state => {
  return {
    username: state.user.username,
    scoreboard: state.user.scoreboard,
    tries: state.memory.numberOfTries,
    score: state.memory.score
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      startGame: ACTIONS.startGame
    },
    dispatch
  );
};

class Result extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {}
  render() {
    const { scoreboard, username } = this.props;
    if (!username) return <Redirect to="/" />;
    return (
      <div className="text-color-star-wars my-5">
        <h1 className="text-center">Congrats {username}!</h1>
        <div className="mx-lg-5 mx-sm-0">
          <table className="table table-secondary table-bordered">
            <thead>
              <tr>
                <th>USERNAME</th>
                <th>SCORE</th>
                <th>TRIES</th>
              </tr>
            </thead>
            <tbody>
              {scoreboard.map((res, index) => (
                <tr key={index}>
                  <td>{res["username"]}</td>
                  <td>{res["score"]}</td>
                  <td>{res["tries"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            className="btn btn-success btn-block p-3 mt-4"
            onClick={this.handleClick}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    );
  }
  handleClick = event => {
    this.props.startGame();
    this.props["history"].push("/playground");
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
