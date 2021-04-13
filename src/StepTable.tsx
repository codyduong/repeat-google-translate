import "./StepTable.css"

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
        <button
          style={{height: "1.5em"}}
          key={row.language}
          onClick={() => { props.removeStep(index) }}
        >
          X
        </button>
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