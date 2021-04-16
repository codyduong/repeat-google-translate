import { useState } from "react"
import SetLanguage from "./SetLanguage"
import StepTable from "./StepTable"
import { useSpring, animated } from "react-spring"
import "./LanguageForm.css"
import useWindowDimensions from "./useWindowDimensions"
import stepInterface from "./Interfaces/stepInterface"
import { ThemeContext } from "./Theme"

const LanguageField = (props: any) => {
  const [steps, setSteps] = useState<stepInterface[]>([])
  const [stepsShown, setStepsShown] = useState(true)

  const removeStep = (index: Number) => {
    setSteps(steps.filter((step, i) => i!==index))
  }

  const addStep = (step: any) => {
    setSteps([...steps, step])
    props.setSteps([...steps, step])
    // console.log('Added step ' + step.language)
  }

  const onSubmitTranslate = () => {
    (steps.length===0) ? alert("No steps") : alert("WIP")
  }
  const _width = useWindowDimensions().width
  const style_stepTable = useSpring({
    //overflow: "hidden",
    opacity: 1,
    maxHeight: _width <= 992 ? (_width <= 600 ? "30em" : "30em") : "30em",
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
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className="grid">
          <div style={{ display: "inline-block" }}><b>Current Steps</b><br />
            <button
              style={{ borderStyle: "solid", backgroundColor: theme.button, color: theme.foreground }}
              onClick={() => {
                setStepsShown(!stepsShown)
              }}
            >
              {stepsShown === true ? "Hide ▲" : "Show ▼"}
            </button>
            <button
              style={{ borderStyle: "solid", backgroundColor: theme.button, color: theme.foreground, cursor: steps.length===0 ? "not-allowed" : "auto"}}
              onClick={() => onSubmitTranslate()}
              disabled={steps.length===0 ? true : false}
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
          <div style={{ display: "inline-block" }}>
            <span><b>Add Step</b></span><br />
            <SetLanguage
              input={false}
              steps={steps}
              addStep={addStep}
            />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default LanguageField