import { useState } from "react"
import SetLanguage from "./SetLanguage"
import StepTable from "./StepTable"
import { useSpring, animated } from "react-spring"
import "./LanguageForm.css"
import useWindowDimensions from "./useWindowDimensions"

const LanguageField = () => {
  const [steps, setSteps] = useState<object[]>([])
  const [stepsShown, setStepsShown] = useState(true)

  const removeStep = (index: Number) => {
    setSteps(steps.filter((step, i) => i!==index))
  }

  const addStep = (step: any) => {
    setSteps([...steps, step])
    // console.log('Added step ' + step.language)
    // console.log(steps)
  }

  const onSubmitTranslate = () => {
    (steps.length===0) ? alert("No steps loser") : alert("Loser")
  }
  const _width = useWindowDimensions().width
  const style_stepTable = useSpring({
    //overflow: "hidden",
    opacity: 1,
    maxHeight: _width <= 992 ? (_width <= 600 ? "5em" : "10em") : "30em",
    from: { opacity: 0, maxHeight: '0em'},
    reset: false,
    zIndex: -1,
    delay: 0,
    reverse: !stepsShown,
    config: {
      clamp: true //this removes overshooting
    }
  })

  return (
    <div className="grid">
      <div style={{display: "inline-block"}}><b>Current Steps</b><br />
        <button
          onClick = {() => {
            setStepsShown(!stepsShown)
          }}
        >
          {stepsShown===true ? "Hide ▲" : "Show ▼"}
        </button>
        <button
          onClick = {() => onSubmitTranslate()}
        >
          Translate Steps
        </button>
        <div className="scrollstep_outer">
          <animated.div className="scrollstep_inner" style={style_stepTable}>
            <StepTable
              steps={steps}
              removeStep={removeStep}
            />
          </animated.div>
        </div>
      </div>
      <div style={{display: "inline-block"}}>
        <span><b>Add Step</b></span><br />
        <SetLanguage
          input={false}
          addStep={addStep}
        />
      </div>
    </div>
  )
}

export default LanguageField