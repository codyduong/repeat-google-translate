import { useEffect, useState, useRef } from "react"
import SetLanguage from "./SetLanguage"

const InputField = (props: any) => {
  const [text, setText] = useState("")
  const [selected, setSelected] = useState("")

  const handleChange = (event: any) => {
    setText(event.target.value)
    props.setText(event.target.value) //passes upwards
  }

  const formSubmit = () => {
    //props.setText
  }

  const _inputStyling = {
    display: "inline-block",
    width: "50%",
  }
  return (
    <> 
      <SetLanguage
        Input={true}
        setSelected={setSelected}
      />
      <textarea
        name="name"
        id="name"
        maxLength={5000}
        onChange={handleChange}
        placeholder={props.placeholderText ?? ""}
        style = {_inputStyling}
      />
      {text.length}/5000
    </>
  )

}

export default InputField