import { useState } from "react"
import SetLanguage from "./SetLanguage"
import "./TextFields.css"

const TextFields = (props: any) => {
  const [text, setText] = useState("")
  const [selected, setSelected] = useState("")

  const handleChange = (event: any) => {
    setText(event.target.value)
    props.setText(event.target.value) //passes upwards
  }

  return (
    <> 
      <div className="hiddenOverFlowSelect">
        <SetLanguage
          input={true}
          setSelected={setSelected}
        />
      </div>
      <div className="textgrid">
        <div className="textareasurround">
          <textarea
            name="name"
            id="name"
            maxLength={5000}
            onChange={handleChange}
            placeholder={props.placeholderText ?? ""}
          />
          {text.length}/5000
        </div>
        <div className="textareasurround">
          <textarea
            disabled={true}
            placeholder="Translation"
            value={text}
          />
        </div>
      </div>
    </>
  )

}

export default TextFields