import React from "react";
type Props = {
  username: string;
  tries: number;
};
export class UserInfo extends React.Component<Props> {
  render() {
    const { username, tries } = this.props;
    return (
      <div className="card my-4">
        <div className="card-body d-flex justify-content-between">
          <span className="m-0">USERNAME: {username}</span>
          <span className="m-0">TRIES: {tries}</span>
        </div>
      </div>
    );
  }
}

export default UserInfo;
