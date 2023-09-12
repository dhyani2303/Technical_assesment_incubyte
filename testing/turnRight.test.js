const turnRight = require("../modules/turnRight").turnRight;

test("changes direction to the right when current direction is N", () => {
  const Direction = "N";
  expect(turnRight(Direction)).toStrictEqual("E");
});

test("changes direction to the right when current direction is S", () => {
    const Direction = "S";
    expect(turnRight(Direction)).toStrictEqual("W");
  });

  test("changes direction to the right when current direction is E", () => {
    const Direction = "E";
    expect(turnRight(Direction)).toStrictEqual("S");
  });

  test("changes direction to the right when current direction is W", () => {
    const Direction = "W";
    expect(turnRight(Direction)).toStrictEqual("N");
  });

  test("changes direction to the right when current direction is U", () => {
    const Direction = "U";
    expect(turnRight(Direction)).toStrictEqual("E");
  });

  test("changes direction to the right when current direction is D", () => {
    const Direction = "D";
    expect(turnRight(Direction)).toStrictEqual("W");
  });

