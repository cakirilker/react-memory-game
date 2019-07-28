import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ACTIONS from "../actions";
// get our fontawesome imports
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type Props = {
  username: string;
  setUsername: (username) => void;
};
const mapStateToProps = state => {
  return {
    username: state.user.username
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setUsername: ACTIONS.setUsername
    },
    dispatch
  );
};
class Home extends React.Component<Props, { username }> {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      username: this.props.username
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.setUsername(this.state.username);
    if (this.state.username) {
      this.props["history"].push("/playground");
    }
  };
  handleChange = event => {
    this.setState({ username: event.target.value.trim().toUpperCase() });
  };

  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <form onSubmit={this.handleSubmit} className="col-sm-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="username-input" className="text-white">
                Username
              </label>
              <input
                type="input"
                className="form-control"
                id="username-input"
                aria-describedby="username-help"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.handleChange}
                autoComplete="off"
                maxLength={15}
              />
              <small
                id="username-help"
                className="form-text text-white-50 text-muted"
              >
                Enter a username to play game.
              </small>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block p-3"
              disabled={!this.state.username}
            >
              Click to start!
            </button>
            <div className="text-color-star-wars">
              <h4 className="font-weight-bold pt-3">Beware!</h4>
              <p className="text-justify">
                This game has a basic score system. For each try if you fail to
                match cards you will lose 5 point, if you succeed you will gain
                15 points.
              </p>
            </div>
            <a
              className="d-flex justify-content-center"
              href="https://github.com/cakirilker/react-memory-game"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color="#feda4a"
                size="3x"
                title="View Source"
              />
            </a>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
