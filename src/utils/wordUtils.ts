import { LetterState } from "../types/types";

export const evaluateGuess = (guess: string, target: string): LetterState[] => {
  const result: LetterState[] = Array(5).fill("absent");
  const targetLetters: (string | null)[] = [...target];

  for (let i = 0; i < 5; i++) {
    if (guess[i] === target[i]) {
      result[i] = "correct";
      targetLetters[i] = null;
    }
  }

  for (let i = 0; i < 5; i++) {
    if (result[i] !== "correct") {
      const index = targetLetters.indexOf(guess[i]);
      if (index > -1) {
        result[i] = "present";
        targetLetters[index] = null;
      }
    }
  }
  return result;
};
