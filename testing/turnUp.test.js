const turnUp = require("../modules/turnUp").turnUp;

test("changes direction to the Up when current direction is N/S/E/W", () => {
    expect(turnUp("N")).toStrictEqual("U");
    expect(turnUp("S")).toStrictEqual("U");
    expect(turnUp("E")).toStrictEqual("U");
    expect(turnUp("W")).toStrictEqual("U");
});

test("changes direction to the Up when current direction is U", () => {
    const Direction = "U";
    expect(turnUp(Direction)).toStrictEqual("N");
  });

  test("changes direction to the Up when current direction is D", () => {
    const Direction = "D";
    expect(turnUp(Direction)).toStrictEqual("S");
  });


