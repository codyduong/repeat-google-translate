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

  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </div>
  )

}

export default InputField