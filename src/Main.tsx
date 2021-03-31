import { useState } from "react"
import LanguageBar from "./LanguageBar"
import InputField from "./InputField"

const Main = () => {
	const [text, setText] = useState("")
	const [langIn, setLangIn] = useState("")
	const [langOut, setLangOut] = useState("")
	
	return (
		<div>
			<LanguageBar
				setInput={setLangIn}
				setOutput={setLangOut}
			/>
			<InputField
				setText={setText}
				language={langIn}
			/>
			{text}
		</div>
	)
}

export default Main