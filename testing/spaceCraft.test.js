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