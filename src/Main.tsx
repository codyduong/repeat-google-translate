import { useState } from "react"
import TextField from "./TextFields"
import LanguageForm from "./LanguageForm"

const _styling = {
	marginLeft: "auto",
	marginRight: "auto",
	width: "90vw",
	fontSize: "18px",
}

//https://translate.google.com/?sl=LANGCODEIN&tl=LANGCODEOUT&text=INPUT&op=translate

const Main = () => {
	const [text, setText] = useState("")
	
	return (
		<div style={_styling}>
			<h2 style={{padding: "5px", margin: "0px"}}>TRANSLATE ∞</h2>
			<div style={{display:"flexbox"}}>
				<TextField
					setText={setText}
				/>
			</div>
			<LanguageForm 
				
			/>
		</div>
	)
}

export default Main