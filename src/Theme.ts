import React from "react"

export const themes = {
  light: {
    foreground: 'hsl(0, 0%, 0%)',
    background: 'hsl(240, 10%, 100%)',
    textarea: 'hsl(240, 20%, 100%)',
    button: 'hsl(0, 0%, 94%)',
    selected: 'hsl(0, 0%, 81%)',
    selectedText : 'hsl(200, 50%, 50%)',
  },
  dark: {
    foreground: 'hsl(0, 0%, 75%)',
    background: 'hsl(216, 28%, 7%)',
    textarea: 'hsl(216, 21%, 11%)',
    button: 'hsl(215, 15%, 15%)',
    selected: 'hsl(215, 15%, 25%)',
    selectedText : 'hsl(200, 75%, 75%)',
  }
}

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
})