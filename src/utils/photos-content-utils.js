import AfricanViolet from "../images/AfricanViolet.jpg";
import Beach from "../images/Beach.jpg";
import Bird from "../images/Bird.jpg";
import Bird2 from "../images/Bird2.jpg";
import Blackwater from "../images/Blackwater.jpg";
import Cabbage from "../images/Cabbage.jpg";
import CenterCity from "../images/CenterCity.jpg";
import CherryBlossom from "../images/CherryBlossom.jpg";
import Coaster from "../images/Coaster.jpg";
import Ducks from "../images/Ducks.jpg";
import Fall from "../images/Fall.jpg";
import Flowers from "../images/Flowers.jpg";
import Fountain from "../images/Fountain.jpg";
import Garden from "../images/Garden.jpg";
import Greenwich from "../images/Greenwich.jpg";
import Halloween from "../images/Halloween.jpg";
import Hearts from "../images/Hearts.jpg";
import Pinecone from "../images/Pinecone.jpg";
import Plant from "../images/Plant.jpg";
import Plant2 from "../images/Plant2.jpg";
import RockStructure from "../images/RockStructure.jpg";
import ValleyForge from "../images/ValleyForge.jpg";
import Wall from "../images/Wall.jpg";

export var photoArray = [
  AfricanViolet,
  Beach,
  Bird,
  Bird2,
  Blackwater,
  Cabbage,
  CenterCity,
  CherryBlossom,
  Coaster,
  Ducks,
  Fall,
  Flowers,
  Fountain,
  Garden,
  Greenwich,
  Halloween,
  Hearts,
  Pinecone,
  Plant,
  Plant2,
  RockStructure,
  ValleyForge,
  Wall,
];

export var photoGroup = [];
var size = 3;
while (photoArray.length > 0) photoGroup.push(photoArray.splice(0, size));
