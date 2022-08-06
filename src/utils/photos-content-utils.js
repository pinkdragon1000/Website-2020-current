const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context("../images", false, /\.(png|jpe?g|svg)$/));

const images = Object.entries(cache).map((module) =>
  module[0].replace("./", "")
);

export var photoGroup = [];
var size = 3;
while (images.length > 0) photoGroup.push(images.splice(0, size));
