
const LANGS = require('./languages.json')

const SetLanguage = (props: any) => {
  let _langlist = []

  for (const [key, value] of Object.entries(LANGS)) {
    _langlist.push({key, value})
    //console.log(`${key}: ${value}`);
  }

  const test = _langlist.map(({key, value}) => {
    return (
      <div>
        {key}
      </div>
    )
  })
  
  
  return (
    <div>
      {test}
    </div>
  )
}

export default SetLanguage