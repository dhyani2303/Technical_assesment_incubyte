const moveBackward = require("../modules/moveBackward").moveBackward;

test("moves Backward when current direction is N", () => {
  let Direction = "N";
  let position = [0, 0, 0];
  Position = moveBackward(position, Direction);
  expect(Position).toStrictEqual([0, -1, 0]);
});

test("moves Backward when current direction is S", () => {
  let Direction = "S";
  let position = [0, 0, 0];
  Position = moveBackward(position, Direction);
  expect(Position).toStrictEqual([0, 1, 0]);
});

test("moves Backward when current direction is E", () => {
  let Direction = "E";
  let position = [0, 0, 0];
  Position = moveBackward(position, Direction);
  expect(Position).toStrictEqual([-1, 0, 0]);
});

test("moves Backward when current direction is W", () => {
  let Direction = "W";
  let position = [0, 0, 0];
  Position = moveBackward(position, Direction);
  expect(Position).toStrictEqual([1, 0, 0]);
});

test("moves Backward when current direction is U", () => {
  let Direction = "U";
  let position = [0, 0, 0];
  Position = moveBackward(position, Direction);
  expect(Position).toStrictEqual([0, 0, -1]);
});

test("moves Backward when current direction is D", () => {
  let Direction = "D";
  let position = [0, 0, 0];
  Position = moveBackward(position, Direction);
  expect(Position).toStrictEqual([0, 0, 1]);
});
