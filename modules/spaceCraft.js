const moveForward = require("./moveForward").moveForward;
const moveBackward = require("./moveBackward").moveBackward;

function spaceCraft(commands, start) {
  let direction = start.direction;
  let coordinates = start.coordinates;

  for (let i = 0; i < commands.length; i++) {
    let c = commands[i];
    if (c === "f") {
      coordinates = moveForward(coordinates, direction);
    } else if (c === "b") {
      coordinates = moveBackward(coordinates, direction);
    }
  }
  return { coordinates, direction };
}

module.exports = {
  spaceCraft,
};
