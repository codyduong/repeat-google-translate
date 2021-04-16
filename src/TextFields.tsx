import { useState } from "react"
import SetLanguage from "./SetLanguage"
import "./TextFields.css"
import { ThemeContext } from "./Theme"

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
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className="textgrid">
            <div className="textareasurround">
              <textarea
                name="Input Text"
                maxLength={5000}
                onChange={handleChange}
                style={{backgroundColor: theme.textarea, color: theme.foreground}}
                placeholder={props.placeholderText ?? ""}
              />
              {text.length}/5000
            </div>
            <div className="textareasurround">
              <textarea
                name="Translated Result"
                disabled={true}
                placeholder="Translation"
                style={{backgroundColor: theme.textarea, color: theme.foreground}}
                value={text}
              />
            </div>
          </div>
          )}
        </ThemeContext.Consumer>
    </>
  )

}

export default TextFields