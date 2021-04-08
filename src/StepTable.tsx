const StepTable = (props: any) => {
  
  const test = props.steps.map((row: any, index: any) => {
    return (
      <div key={index}>
        {row.language}
        <button 
          key = {row.language}
          onClick = {() => {props.removeStep(index)}}
        >
          X
        </button>
      </div>
    )
  })

  return (
    <>
      {test}
    </>
  )
}

export default StepTable