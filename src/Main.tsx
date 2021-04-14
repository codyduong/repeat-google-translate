import { useState } from "react"
import TextField from "./TextFields"
import LanguageForm from "./LanguageForm"
import Header from "./Header"
import Footer from "./Footer"

const _FOOTERTEXT = "Made by Cody Duong. Currently a work in progress. Made for fun to practice TS and React"

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
			<Header/>
			<div className="Main">
				<div style={{display:"flexbox"}}>
					<TextField
						setText={setText}
					/>
				</div>
				<LanguageForm 
					
				/>
			</div>
			<Footer
				text={_FOOTERTEXT}
			/>
		</div>
	)
}

export default Main