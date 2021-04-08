import { useState } from "react"
import SetLanguage from "./SetLanguage"

const InputField = (props: any) => {
  const [text, setText] = useState("")
  const [selected, setSelected] = useState("")

  const handleChange = (event: any) => {
    setText(event.target.value)
    props.setText(event.target.value) //passes upwards
  }

  const style_grid = {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gridColumnGap: "5px",
    marginLeft: "auto",
    marginRight: "auto",
  }
  const style_outerDivTextArea = {
    width: "99%",
    margin: "1%",
  }
  const style_textArea = {
    display: "inline-block",
    width: "100%",
    height: "12vh",
  }
  return (
    <> 
      <SetLanguage
        Input={true}
        setSelected={setSelected}
      />
      <div style={style_grid}>
        <div style = {style_outerDivTextArea}>
          <textarea
            name="name"
            id="name"
            maxLength={5000}
            onChange={handleChange}
            placeholder={props.placeholderText ?? ""}
            style={style_textArea}
          />
          {text.length}/5000
        </div>
        <div style = {style_outerDivTextArea}>
          <textarea
            disabled={true}
            placeholder="Translation"
            value={text}
            style={style_textArea}
          />
        </div>
      </div>
    </>
  )

}

export default InputField