import { useEffect, useState, useRef } from "react"

const InputField = (props: any) => {
  const [text, setText] = useState("")

  const handleChange = (event: any) => {
    setText(event.target.value)
    props.setText(event.target.value) //passes upwards
  }

  const formSubmit = () => {
    //props.setText
  }

  const _inputStyling = {
    display: "block",
    width: "40%",
    rows: "8",
  }
  return (
    <> 
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