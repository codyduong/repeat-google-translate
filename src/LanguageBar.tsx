import SetLanguage from "./SetLanguage"

const LanguageBar = (props: any) => {
  return (
    <>
      <SetLanguage 
        setLanguage = {props.setInput}
      />
      <SetLanguage
        setLanguage = {props.setOutput}
      />
    </>
  )
}

export default LanguageBar