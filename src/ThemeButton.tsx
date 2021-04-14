import "./ThemeButton.css"
import { useState } from "react"
import { animated, useSpring } from "react-spring"
import { ReactComponent as Moon } from "./themebuttonmoon.svg"

const ThemeButton = () => {
  const [isDark, setIsDark] = useState(false)
  const animate = useSpring({
    transform: "translate(1.25em)",
    backgroundColor: "#846899",
    from: { 
      transform: "translate(0em)",
      backgroundColor: "#303030",
    },
    reverse: !isDark,
    reset: false,
  })


  return (
    <div 
      className="ThemeButtonRect" 
      style={{
        backgroundColor: isDark ? "var(--bgDark)" : "",
        borderColor: isDark? "var(--borderDark)" : "",
      }}
      onClick={() => {
        setIsDark(!isDark)
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
  )
}

export default ThemeButton