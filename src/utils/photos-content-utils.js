import Bird from "../images/Bird.jpg";
import Blackwater from "../images/Blackwater.jpg";
import CenterCity from "../images/CenterCity.jpg";
import CherryBlossom from "../images/CherryBlossom.jpg";
import Pinecone from "../images/Pinecone.jpg";
import Plant from "../images/Plant.jpg";
import Plant2 from "../images/Plant2.jpg";
import RockStructure from "../images/RockStructure.jpg";
import ValleyForge from "../images/ValleyForge.jpg";
import Wall from "../images/Wall.jpg";

export var photoArray = [
  Bird,
  Blackwater,
  CenterCity,
  CherryBlossom,
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
