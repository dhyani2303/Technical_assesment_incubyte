const moveForward = require("./moveForward").moveForward;
const moveBackward = require("./moveBackward").moveBackward;
const turnLeft = require("./turnLeft").turnLeft;
const turnRight = require("./turnRight").turnRight;

function spaceCraft(commands, start) {
  let direction = start.direction;
  let coordinates = start.coordinates;

  for (let i = 0; i < commands.length; i++) {
    let c = commands[i];
    if (c === "f") {
      coordinates = moveForward(coordinates, direction);
    } else if (c === "b") {
      coordinates = moveBackward(coordinates, direction);
    } else if (c === "l") {
      direction = turnLeft(direction);
    } else if (c === "r") {
      direction = turnRight(direction);
    }
  }
  return { coordinates, direction };
}

module.exports = {
  spaceCraft,
};
