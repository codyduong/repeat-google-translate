import "./Footer.css"
import { ReactComponent as GithubLogo } from "./github.svg"

const Footer = (props: any) => {
  return (
    <div className="Footer">
      {props.text}
      <div className="FooterButton">
        <a className="FooterSrcLink" href="https://github.com/codyduong/repeat-translate">
          <GithubLogo
            width={16}
            height={16}
          /> Source Code
        </a>
      </div>
    </div>
  )
}

export default Footer