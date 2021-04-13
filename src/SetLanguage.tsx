import { useState } from "react"
import { useSpring, animated } from "react-spring"
import "./SetLanguage.css"
import stepInterface from "./Interfaces/stepInterface"

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
  
  const style_gridElement = {
    justifySelf: "stretch",
    textOverflow: "hidden",
    zIndex: props.input ? 2 : 1,
  }
  const gridElements = _langlist.map(({key, value}) => {
    const _onClickFunc = () => {
      setLanguage(key, ''+value)
      if (props.input===true) {
        setShown(false)
        props.setSelected(key)
      }
    }

    return (
      <button 
        key = {key}
        style = {style_gridElement}
        onClick = {() => _onClickFunc()}
        disabled = {
          shown ? (
            props.steps ? (
              props.steps[props.steps.length - 1]?.language === key
            ) : false
          ) : true
        }
      >
        {key}
      </button>
    )
  })

  const animate = useSpring({
    //top: '0px',
    opacity: 1,
    //transform: 'translate3d(0,0,0)',
    reset: false,
    delay: 0,
    reverse: !shown,
    overflow: 'hidden',
    height: "30em",
    maxHeight: '100%',
    from: { opacity: 0, height: '0em'},
  })

  return (
    <div>
      Translate {props.input===false ? "to" : "from"}: {lang} 
      <input
        style={{zIndex: 1}}
        type="button"
        value={!shown ? "▼" : "▲"}
        onClick={() => {
          setShown(!shown)
        }}
      />
      {props.input===false ? <input
        type="button"
        value="Add Step"
        disabled= {lang===""} 
        onClick={() => {
          if (lang === "") {
            alert("No language selected")
          }
          else if (props.steps[props.steps.length-1]?.language === lang) {
            alert('Cannot translate twice in the row to the same language')
            setLanguage()
          } else {
            props.addStep({
              language: lang,
              langCode: code,
            })
            _langlist = _langlist.filter((lang, i) => _langlist[i]!==lang)
            //setLast(lang)
            setLanguage()
          }
        }}
      /> : null}
      <animated.div className="langgrid" style={animate}>
        {gridElements}
      </animated.div>
    </div>
  )
}

export default SetLanguage