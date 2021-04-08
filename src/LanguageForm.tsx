import { useState } from "react"
import SetLanguage from "./SetLanguage"
import StepTable from "./StepTable"

const LanguageField = () => {
  const [steps, setSteps] = useState<object[]>([])

  const removeStep = (index: Number) => {
    setSteps(steps.filter((step, i) => i!==index))
  }

  const addStep = (step: any) => {
    setSteps([...steps, step])
    // console.log('Added step ' + step.language)
    // console.log(steps)
  }

  return (
    <div>
      <div><b>Current Steps</b><br />
        <StepTable
          steps={steps}
          removeStep={removeStep}
        />
      </div>
      <span><b>Add Step</b></span><br />
      <SetLanguage
        input={false}
        addStep={addStep}
      />
    </div>
  )
}

export default LanguageField