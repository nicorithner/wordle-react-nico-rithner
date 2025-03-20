# Wordle Clone Design System

## Colors

Our color palette is designed to provide clear visual feedback and maintain consistency across the application.

- `--color-correct: #6aaa64` (Green)
- `--color-present: #c9b458` (Yellow)
- `--color-absent: #3a3a3c` (Gray)
- `--color-background: #121213` (Dark Background)
- `--color-text: #d7dadc` (Light Text)
- `--color-border-light: #B5B7BB` (light border)

### Usage

- `--color-correct`: Used for correctly guessed letters in the right position
- `--color-present`: Used for correctly guessed letters in the wrong position
- `--color-absent`: Used for letters that are not in the word
- `--color-background`: Main background color
- `--color-text`: Main text color

## Typography

- Font Family: system-ui, Avenir, Helvetica, Arial, sans-serif
- Base Font Size: 16px
- Line Height: 1.5

### Headings

- H1: 2.5em (40px), line-height: 1.1

## Layout

- Max Width: 500px
- Padding: 20px

## Components

### Grid

- Gap between cells: 5px
- Cell Size: 50px x 50px
- Cell Border: 2px solid #3a3a3c
- Cell Font Size: 24px

### Keyboard

- Gap between keys: 6px
- Key Size: min-width 40px, height 50px
- Key Background: #818384
- Key Hover: #9fa2a6
- Key Active: #b8bbbf

## Accessibility

- High contrast between background and text colors
- Clear visual feedback for game state
- Keyboard navigation support

## Responsive Design

- Minimum width: 320px
- Flexible layout to accommodate various screen sizes

## Best Practices

1. Use CSS variables for consistent color application
2. Maintain separation of concerns with component-specific CSS files
3. Ensure all interactive elements have clear hover and focus states
4. Use semantic HTML elements for better accessibility
5. Implement responsive design principles for various device sizes

## Future Considerations

- Light/Dark mode toggle
- Customizable color themes
- Internationalization support for multiple languages
- Subtle hove and active states for interactive elements
- Animations at important stages of the game such as end of game.
