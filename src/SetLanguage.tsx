import { useState, useEffect } from "react"

const SetLanguage = (props: any) => {
  const [langs, setLangs] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("./languages.json")
      .then(res => res.json())
      .then(
        (result) => {
          setLoaded(true)
          setLangs(result)
        },
        (error) => {
          setLoaded(true)
          setError(error)
        }
      )
  }, [])

  const LangTable = () => {
    return (
      <>
      </>
    )
  }


  if (error) {
    console.log(error)
    return (
      <div>There was an error</div>
    ) 
  } else if (!loaded) {
    return (
      <div>Loading...</div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}

export default SetLanguage