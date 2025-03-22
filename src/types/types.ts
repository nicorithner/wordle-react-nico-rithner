export type LetterState = "correct" | "present" | "absent";

export interface GridProps {
  guesses: string[];
  target: string;
  currentGuess: string;
}

export interface KeyboardProps {
  onKeyPress: (key: string) => void;
  usedKeys: Record<string, string>;
}

export interface WelcomeProps {
  onStartGame: () => void;
}

export interface GameOverProps {
  won: boolean;
  target: string;
  onPlayAgain: () => void;
  onBackToWelcome: () => void;
}

export interface WordleLogoProps {
  animate?: boolean;
}
