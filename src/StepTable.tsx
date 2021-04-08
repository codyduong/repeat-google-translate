const StepTable = (props: any) => {
  
  const test = props.steps.map((row: any, index: any) => {
    return (
      <tr key={index}>
        <td style={{width: "12em"}}>
          {row.language}
        </td>
        <td>
          {row.langCode}
        </td>
        <td>
          <button
            key={row.language}
            onClick={() => { props.removeStep(index) }}
          >
            X
        </button>
        </td>
      </tr>
    )
  })

  return (
    <table>
      {test}
    </table>
  )
}

export default StepTable