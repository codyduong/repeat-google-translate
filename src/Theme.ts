import React from "react"

export const themes = {
  light: {
    foreground: 'hsl(0, 0%, 0%)',
    background: 'hsl(240, 10%, 100%)',
  },
  dark: {
    foreground: 'hsl(0, 0%, 75%)',
    background: 'hsl(216, 28%, 7%)',
  }
}

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
})