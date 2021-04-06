import { useState } from "react"
import { useSpring, animated } from "react-spring"

const LANGS = require('./languages.json')

const SetLanguage = (props: any) => {
  const [last, setLast] = useState("") //the priorly selected language
  const [selected, setSelected] = useState("") //the selected language
  const [shown, setShown] = useState(false)
  let _langlist = []
  props.Input===true && _langlist.push({key: "Detect Language ", value: "auto"})

  for (const [key, value] of Object.entries(LANGS)) {
    _langlist.push({key, value})
    //console.log(`${key}: ${value}`);
  }
  
  const _gridElement = {}
  const gridElements = _langlist.map(({key, value}) => {
    const _onClickFunc = () => {
      setSelected(key + ' [' + value + ']')
      if (props.input===true) {
        props.setSelected(key + ' [' + value + ']')
      }
    }

    return (
      <button 
        key = {key}
        style = {_gridElement}
        onClick = {() => _onClickFunc()}
        disabled = {!shown}
      >
        {key}
      </button>
    )
  })

  const animate = useSpring({
    display: "grid",
    gridTemplateColumns: "16.66% 16.66% 16.66% 16.66% 16.66% 16.66%",
    //gridTemplateRows: "15%", disabled to auto height
    //top: '0px',
    opacity: 1,
    //transform: 'translate3d(0,0,0)',
    reset: false,
    zIndex: -1,
    delay: 0,
    reverse: !shown,
    overflow: 'hidden',
    maxHeight: '100em',
    from: { opacity: 0, maxHeight: '0em'},
  })
  
  return (
    <div>
      Translate {props.input===false ? "to" : "from"}: {selected} 
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
        onClick={() => {
          if (last === selected) {
            alert('Cannot translate twice in the row to the same language');
            setSelected("");
          }
          selected !== "" && props.addStep({  //a dumb if statement lol
            language: selected,
            other: "lol",
          })
          setLast(selected)
          setSelected("")
        }}
      /> : null}
      <animated.div style={animate}>
        {gridElements}
      </animated.div>
    </div>
  )
}

export default SetLanguage