<div align="center">
  <img src="./wordle-logo-kopi.png"/>
</div>

# WORDLE GAME - REACT

## Overview

## The Challenge

Create simple version of the game Wordle implemented in Vite using React and TypeScript including the following requirements:

- All rules are implemented.
- Include a unit test of the word guessing routine that validates at least the last two
  rules.
- Your code cannot perform any network communication.
- The word list array must be stored in a data or words file as constant .
- The unit test may use a hard-coded word list.
- Provide a quick introduction to the game for the user.

## Game Rules

- You have five guesses
- All words are 5 length
- The guesser gets the feedback about any letters in their guess that are in the right
  position with a green highlight, while letters that are in the word but not in the
  correct position will get a yellow outline.
- The yellow highlight will not show up if you have more of a letter than in the correct
  answer. - Example: if the the correct word is WATER and you guess OTTER, the first T
  must not get a yellow highlight.

### Built With

- Vite
- React
- TypeScript
