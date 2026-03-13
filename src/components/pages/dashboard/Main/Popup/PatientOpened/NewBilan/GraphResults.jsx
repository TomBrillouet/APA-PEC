import React from "react"
import SimpleLineGraph from "./SimpleLineGraph.jsx"

function GraphResults({ selectedPatient, selectedTests }) {
  const dataResults = (testName, resultField) => {
    return selectedPatient.bilans
      .slice()
      .reverse()
      .filter((bilan) => {
        const test = bilan.tests.find((test) => test.name === testName)
        const result = test?.results.find(
          (result) => result.field === resultField && result.value !== "",
        )

        return result !== undefined
      })
      .map((bilan, index) => {
        const test = bilan.tests.find((test) => test.name === testName)
        const result = test.results.find(
          (result) => result.field === resultField && result.value !== "",
        )

        return {
          date: bilan.date,
          [resultField]: result.value,
          index: index,
        }
      })
  }
  const graphResults = selectedTests
    .filter((t) => t.results)
    .map((test) => {
      const resultsWithGraph = test.results.filter((result) => result.chart)
      return resultsWithGraph.map((result) => {
        const data = dataResults(test.name, result.field)
        if (data.length > 1) {
          return (
            <SimpleLineGraph
              key={test.name + result.field}
              data={data}
              legend={`${test.name} - ${result.field}`}
              y={result.field}
            />
          )
        }
      })
    })

  return <>{graphResults}</>
}

export default React.memo(GraphResults)
