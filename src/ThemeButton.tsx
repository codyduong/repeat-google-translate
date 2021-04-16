import "./ThemeButton.css"
import { useState } from "react"
import { animated, useSpring } from "react-spring"
import { ReactComponent as Moon } from "./themebuttonmoon.svg"
import { ThemeContext } from "./Theme"
import { useCookies } from "react-cookie"

const ThemeButton = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['isDark']);
  const [isDark, setIsDark] = useState<boolean>(cookies.isDark ?? false)
  const animate = useSpring({
    transform: "translate(1.25em)",
    backgroundColor: "#846899",
    from: { 
      transform: "translate(0em)",
      backgroundColor: "#303030",
    },
    reverse: !isDark,
  })

  const setTheme = (prop: boolean) => {
    setIsDark(prop)
    if (prop) {
      setCookie('isDark', prop, { path: '/ '})
    } else {
      removeCookie('isDark', { path: '/ '})
    }
  }

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div
          className="ThemeButtonRect"
          style={{
            backgroundColor: isDark ? "var(--bgDark)" : theme.background,
            borderColor: isDark ? "var(--borderDark)" : "gray",
          }}
          onClick={() => {
            toggleTheme()
            setTheme(!isDark)
          }
          }
        >
          <div className="ThemeButtonOuter">
            <animated.div
              className="ThemeButtonButton"
              style={animate}
            >
              <Moon
                width={16}
                height={16}
                fill={isDark ? "white" : "yellow"}
              />
            </animated.div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
    )
}

export default ThemeButton