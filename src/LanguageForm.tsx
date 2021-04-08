import { useState } from "react"
import SetLanguage from "./SetLanguage"
import StepTable from "./StepTable"
import { useSpring, animated } from "react-spring"
import "./LanguageForm.css"

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

  const style_stepTable = useSpring({
    overflow: "hidden",
    opacity: 1,
    maxHeight: '100em',
    from: { opacity: 0, maxHeight: '0em'},
    reset: false,
    zIndex: -1,
    delay: 0,
    reverse: !stepsShown,
  })

  return (
    <div className="grid">
      <div style={{display: "inline-block"}}><b>Current Steps</b><br />
        <button
          onClick = {() => {
            setStepsShown(!stepsShown)
          }}
        >
          {stepsShown===true ? "Hide" : "Show"}
        </button>
        <button
          onClick = {() => onSubmitTranslate()}
        >
          Translate Steps
        </button>
        <animated.div style={style_stepTable}>
          <StepTable
            steps={steps}
            removeStep={removeStep}
          />
        </animated.div>
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