import { useState } from "react"
import SetLanguage from "./SetLanguage"
import StepTable from "./StepTable"

const LanguageField = () => {
  const [steps, setSteps] = useState<object[]>([])

  const removeStep = (index: Number) => {
    steps: steps.filter((step, i) => {
      return i !== index;
    })
  }

  const addStep = (step: any) => {
    setSteps([...steps, step])
    console.log('Added step ' + step.language)
    console.log(steps)
  }

  return (
    <div>
      <div><b>Current Steps</b><br />
        <StepTable
          Steps={steps}
        />
      </div>
      <span><b>Add Step</b></span><br />
      <SetLanguage
        AddStep={addStep}
      />
    </div>
  )
}

export default LanguageField