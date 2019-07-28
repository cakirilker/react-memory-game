import * as _lodash from "lodash";
import { Memory } from "../interfaces";
function generateTiles() {
  let images: Memory.ITile[] = [];
  for (let index = 1; index < 9; index++) {
    images.push({
      image: `assets/img/${index}.png`,
      flipped: false,
      matched: false
    });
  }
  return _lodash.shuffle(_lodash.concat(images, images));
}
export default {
  generateTiles
};
