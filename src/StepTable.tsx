import "./StepTable.css"
import { ThemeContext } from "./Theme"

const StepTable = (props: any) => { 
  const table_content = props.steps.map((row: any, index: any) => {
    return (
      <div key={index} className="outer-step-table">
        <div className="inline-div">
          {row.language}
        </div>
        <div className="inline-div">
          {row.langCode}
        </div>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <button
              style={{ height: "1.5em", cursor: "pointer", backgroundColor: theme.button, color: theme.foreground }}
              key={row.language}
              onClick={() => { props.removeStep(index) }}
            >
              X
            </button>
          )}
        </ThemeContext.Consumer>
      </div >
    )
  })


  return table_content.length !== 0 ? (
    <div className="faketable">
      {table_content}
    </div>
  ) : (
    <>No steps</>
  )
}

export default StepTable