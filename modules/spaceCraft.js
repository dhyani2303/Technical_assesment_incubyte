const moveForward = require("./moveForward").moveForward;

function spaceCraft(commands, start) {
  let direction = start.direction;
  let coordinates = start.coordinates;

  for(let i = 0; i < commands.length; i++)
  {
      let c=commands[i];
      if(c === "f") {
        coordinates = moveForward(coordinates, direction);
      } 
      
  }
  return {coordinates,direction};
}

module.exports = {
    spaceCraft,
};