import React, { useState } from "react"
import TextField from "./TextFields"
import LanguageForm from "./LanguageForm"
import Header from "./Header"
import Footer from "./Footer"
import { ThemeContext, themes } from './Theme'

const _FOOTERTEXT = "Made by Cody Duong. Currently a work in progress. Made for fun to practice TS and React"

//https://translate.google.com/?sl=LANGCODEIN&tl=LANGCODEOUT&text=INPUT&op=translate

const Main = () => {
	const [text, setText] = useState("")
	const [theme, setTheme] = useState(themes.light)
	const toggleTheme = () => {
		if (theme===themes.light) {
			setTheme(themes.dark)
		} else {
			setTheme(themes.light)
		}
		console.log(theme)
	}

	const _styling = {
		marginLeft: "auto",
		marginRight: "auto",
		width: "90vw",
		fontSize: "18px",
	}
	
	return (
		<ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
			<div style={{backgroundColor: theme.background, color: theme.foreground, height: "100vh", width: "100vw"}}>
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
			</div>
		</ThemeContext.Provider>
	)
}

export default Main