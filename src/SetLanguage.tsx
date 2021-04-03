import { useState } from "react"
import { useSpring, animated } from "react-spring"

const LANGS = require('./languages.json')

const SetLanguage = (props: any) => {
  const [shown, setShown] = useState(false)
  let _langlist = []

  for (const [key, value] of Object.entries(LANGS)) {
    _langlist.push({key, value})
    //console.log(`${key}: ${value}`);
  }

  const _gridElement = {
    
  }
  const gridElements = _langlist.map(({key, value}) => {


    return (
      <div style = {_gridElement}>
        {key}
      </div>
    )
  })

  let _debounce = false
  const animate = useSpring({
    display: "grid",
    gridTemplateColumns: "15% 15% 15% 15% 15%",
    //gridTemplateRows: "15%", disabled to auto height
    top: '0px',
    opacity: 1,
    transform: 'translate3d(0,0,0)',
    reset: false,
    zIndex: -1,
    delay: 250,
    reverse: !shown,
    //overflow: 'hidden',
    immediate: _debounce,
    maxHeight: '4em',
    from: { opacity: 0, maxHeight: '0em', transform: 'translate3d(0,-30px,0)' },
    onRest: () => {
      _debounce = !shown ? true : false
    }
  })
  
  return (
    <div
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      Hover
      <animated.div style={animate}>
        {gridElements}
      </animated.div>
    </div>
  )
}

export default SetLanguage