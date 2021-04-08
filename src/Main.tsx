import { useState } from "react"
import InputField from "./TextFields"
import LanguageForm from "./LanguageForm"

const _styling = {
	marginLeft: "auto",
	marginRight: "auto",
	width: "90vw",
}


const Main = () => {
	const [text, setText] = useState("")
	
	return (
		<div style={_styling}>
			<div style={{display:"flexbox"}}>
				<InputField
					setText={setText}
				/>
			</div>
			<LanguageForm 
				
			/>
		</div>
	)
}

export default Main