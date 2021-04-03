import { useState } from "react"
import InputField from "./InputField"
import LanguageForm from "./LanguageForm"

const _styling = {
	marginLeft: "auto",
	marginRight: "auto",
	width: "80vw",
}

const Main = () => {
	const [text, setText] = useState("")
	
	return (
		<div style={_styling}>
			<div style={{display:"flexbox"}}>
				<InputField
					setText={setText}
				/>
				<textarea
					disabled={true}
					placeholder="Translation"
					value={text}
					style={{
						display: "block",
						width: "40%",
					}}
				/>
			</div>
			<LanguageForm 
				
			/>
		</div>
	)
}

export default Main