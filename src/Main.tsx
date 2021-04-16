import { useState, useEffect } from "react"
import TextField from "./TextFields"
import LanguageForm from "./LanguageForm"
import Header from "./Header"
import Footer from "./Footer"
import { ThemeContext, themes } from './Theme'
import { useCookies } from "react-cookie"
import stepInterface from "./Interfaces/stepInterface"

const _FOOTERTEXT = "Made by Cody Duong. Currently a work in progress. Made for fun to practice TS and React"

//https://translate.google.com/?sl=LANGCODEIN&tl=LANGCODEOUT&text=INPUT&op=translate

const Main = () => {
	const [text, setText] = useState("")
	const [translation, setTranslation] = useState("")
	const [selected, setSelected] = useState<stepInterface>()
	const [steps, setSteps] = useState<stepInterface[]>([])
	const [cookies] = useCookies(['isDark'])
	const [theme, setTheme] = useState(cookies.isDark ? themes.dark : themes.light)
	const toggleTheme = () => {
		if (theme===themes.light) {
			setTheme(themes.dark)
		} else {
			setTheme(themes.light)
		}
	}
	
	useEffect(() => {
		document.body.style.backgroundColor = theme.background
		document.body.style.color = theme.foreground
	})

	const _styling = {
		marginLeft: "auto",
		marginRight: "auto",
		width: "90vw",
		fontSize: "18px",
	}

	return (
		<ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
			<div style={{backgroundColor: theme.background, color: theme.foreground, height: "100%", width: "100%"}}>
				<div style={_styling}>
					<Header/>
					<div className="Main">
						<div style={{display:"flexbox"}}>
							<TextField
								setText={setText}
								setSelected={setSelected}
								translated={translation}
							/>
						</div>
						<LanguageForm 
							setSteps={setSteps}
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