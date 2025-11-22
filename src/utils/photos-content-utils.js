import { groupArrayBySize } from "./array-utils";

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context("../images", false, /\.(png|jpe?g|svg)$/));

const images = Object.entries(cache).map((module) =>
  module[0].replace("./", "")
);

export const photoGroup = groupArrayBySize(images, 3);
