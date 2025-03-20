export type LetterState = "correct" | "present" | "absent";

export interface GridProps {
  currentGuess: string;
}

export interface KeyboardProps {
  onKeyPress: (key: string) => void;
}
