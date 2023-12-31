const spaceCraft = require("../modules/spaceCraft").spaceCraft

test("for the only one command", () => {
    const commands = ["f"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "N",
    };
  
    const expected = {
      coordinates: [0, 1, 0],
      direction: "N",
    };
  
    const output = spaceCraft(commands, start);
    expect(output).toStrictEqual(expected);
  
  });


  test("for complete Command", () => {
    const commands = ["f", "f", "u", "l", "l"];
  
    const start = {
      coordinates: [0, 0, 0],
      direction: "W",
    };
  
    const expected = {
      coordinates: [-2, 0, 0],
      direction: "S",
    };
  
    const output = spaceCraft(commands, start);
    expect(output).toStrictEqual(expected);
  
  });

  test("for complete commands", () => {
    const commands = ["f", "f", "f", "f", "f"];
  
    const start = {
      coordinates: [5, -2, 1],
      direction: "E",
    };
    const expected = {
      coordinates: [10, -2, 1],
      direction: "E",
    };
  
    const output = spaceCraft(commands, start);
    expect(output).toStrictEqual(expected);
    
  });