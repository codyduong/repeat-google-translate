const StepTable = (props: any) => { 
  const table_content = props.steps.map((row: any, index: any) => {
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


  return table_content.length !== 0 ? (
    <table>
      {table_content}
    </table>
  ) : (
    <>No steps</>
  )
}

export default StepTable