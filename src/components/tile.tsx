import React from "react";
import { Memory } from "../interfaces";
type Props = {
  tile: Memory.ITile;
  index: number;
  onClickTile: (tile, index) => void;
};
export class Tile extends React.Component<Props> {
  tileBackgroundImage = () => {
    const { tile } = this.props;
    return { backgroundImage: "url(" + tile.image + ")" };
  };
  render() {
    const { tile, index, onClickTile } = this.props;
    const tileClass = tile.flipped ? "tile flipped" : "tile";
    return (
      <div
        className={tileClass}
        onClick={() => {
          onClickTile(tile, index);
        }}
      >
        <div className="tile-front" />
        <div className="tile-back" style={this.tileBackgroundImage()} />
      </div>
    );
  }
}

export default Tile;
