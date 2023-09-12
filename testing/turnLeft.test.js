const turnLeft = require("../modules/turnLeft").turnLeft;

test("changes direction to the left when current direction is N", () => {
  const Direction = "N";
  expect(turnLeft(Direction)).toStrictEqual("W");
});

test("changes direction to the left when current direction is S", () => {
    const Direction = "S";
    expect(turnLeft(Direction)).toStrictEqual("E");
  });

  test("changes direction to the left when current direction is E", () => {
    const Direction = "E";
    expect(turnLeft(Direction)).toStrictEqual("N");
  });

  test("changes direction to the left when current direction is W", () => {
    const Direction = "W";
    expect(turnLeft(Direction)).toStrictEqual("S");
  });

  test("changes direction to the left when current direction is U", () => {
    const Direction = "U";
    expect(turnLeft(Direction)).toStrictEqual("W");
  });

  test("changes direction to the left when current direction is D", () => {
    const Direction = "D";
    expect(turnLeft(Direction)).toStrictEqual("E");
  });
