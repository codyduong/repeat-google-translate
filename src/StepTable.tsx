const StepTable = (props: any) => {
  
  const test = props.steps.map((row: any, index: any) => {
    return (
      <div key={index}>
        {row.language}
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