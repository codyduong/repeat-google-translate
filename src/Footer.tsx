import "./Footer.css"
import { useState } from "react"
import { ReactComponent as GithubLogo } from "./github.svg"
import { ThemeContext, themes } from "./Theme"

const Footer = (props: any) => {
  const [hover, setHover] = useState(false)

  return (
    <ThemeContext.Consumer>
      {({theme}) => (
        <div className="Footer">
          {props.text}
          <div className="FooterButton">
            <a 
              className="FooterSrcLink" 
              href="https://github.com/codyduong/repeat-translate" 
              style={{ color: theme.foreground, backgroundColor: hover ? theme.selected : theme.background}}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <GithubLogo
                width={16}
                height={16}
                fill={theme.foreground}
              /> Source Code
            </a>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Footer