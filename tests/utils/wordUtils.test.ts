import { evaluateGuess } from "../../src/utils/wordUtils";

describe("evaluates guess correctly", () => {
  test("evaluates guess correctly with exact match", () => {
    expect(evaluateGuess("water", "water")).toEqual([
      "correct",
      "correct",
      "correct",
      "correct",
      "correct",
    ]);
  });

  test("with duplicate letters", () => {
    expect(evaluateGuess("eagle", "eagle")).toEqual([
      "correct",
      "correct",
      "correct",
      "correct",
      "correct",
    ]);
  });

  test("letter is not 'present' if the same letter is also 'correct' in different index", () => {
    expect(evaluateGuess("pizza", "paper")).toEqual([
      "correct",
      "absent",
      "absent",
      "absent",
      "present",
    ]);

    expect(evaluateGuess("peter", "water")).not.toEqual([
      "absent",
      "present",
      "correct",
      "correct",
      "correct",
    ]);
  });
});
