import { useState } from "react"
import { useSpring, animated } from "react-spring"
import "./SetLanguage.css"
import { ThemeContext, themes } from "./Theme"

const LANGS = require('./languages.json')

const SetLanguage = (props: any) => {
  const steps = props.steps
  const [lang, setLang] = useState("") //the selected language
  const [code, setCode] = useState("")
  const [shown, setShown] = useState(false)
  let _langlist: any[] = []
  props.input===true && _langlist.push({key: "Detect Language ", value: "auto"})

  for (const [key, value] of Object.entries(LANGS)) {
    _langlist.push({key, value})
    //console.log(`${key}: ${value}`);
  }

  const setLanguage = (lang: string = "", code: string = "") => {
    lang!=="" ? setLang(lang) : setLang("")
    code!=="" ? setCode(code) : setLang("")
  }

  const gridElements = _langlist.map(({key, value}) => {
    const _onClickFunc = () => {
      setLanguage(key, ''+value)
      if (props.input===true) {
        setShown(false)
        props.setSelected(key)
      }
    }

    let _ = shown ? (
      steps ? (
        steps[steps.length - 1]?.language === key
      ) : false
    ) : true

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <button
            key={key}
            className="SetLangaugeButton"
            style={{ zIndex: props.input ? 2 : 1, backgroundColor: theme.button, color: theme.foreground, cursor: _ ? "not-allowed" : "pointer"}}
            onClick={() => _onClickFunc()}
            disabled={_}
          >
            {key}
          </button>
        )}
      </ThemeContext.Consumer>
    )
  })

  const animate = useSpring({
    opacity: 1,
    reset: false,
    delay: 0,
    reverse: !shown,
    overflow: 'hidden',
    height: "30em",
    maxHeight: '100%',
    from: { height: '0em'},
  })

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div>
          Translate {props.input === false ? "to" : "from"}: {lang}
          <input
            style={{ borderStyle: "solid", outline: "none", zIndex: 1, backgroundColor: theme.button, color: theme.foreground }}
            type="button"
            value={!shown ? "▼" : "▲"}
            onClick={() => {
              setShown(!shown)
            }}
          />
          {props.input === false ? <input
            style={{ borderStyle: "solid", outline: "none", zIndex: 1, backgroundColor: theme.button, color: theme.foreground }}
            type="button"
            value="Add Step"
            disabled={lang === ""}
            onClick={() => {
              if (lang === "") {
                alert("No language selected")
              }
              else if (steps[steps.length - 1]?.language === lang) {
                alert('Cannot translate twice in the row to the same language')
                setLanguage()
              } else {
                props.addStep({
                  language: lang,
                  langCode: code,
                })
                _langlist = _langlist.filter((lang, i) => _langlist[i] !== lang)
                //setLast(lang)
                setLanguage()
              }
            }}
          /> : null}
          <animated.div className="langgrid" style={animate}>
            {gridElements}
          </animated.div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default SetLanguage