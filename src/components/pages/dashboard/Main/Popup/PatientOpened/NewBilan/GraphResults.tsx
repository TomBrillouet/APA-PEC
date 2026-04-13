import React from "react"
import SimpleLineGraph from "./SimpleLineGraph.js"
import {
  BilanType,
  ListTestsType,
  PatientType,
  ResultType,
  TestType,
} from "../../../../../../../types/index.js"

type GraphResultsType = {
  selectedPatient: PatientType
  selectedTests: ListTestsType
}

function GraphResults({ selectedPatient, selectedTests }: GraphResultsType) {
  const dataResults = (testName: string, resultField: string) => {
    return selectedPatient.bilans
      .slice()
      .reverse()
      .flatMap((bilan: BilanType) => {
        const test = bilan.tests.find((test) => test.name === testName)
        const result = test?.results.find(
          (result) => result.field === resultField && result.value !== "",
        )

        if (!result) return []
        return [{ date: bilan.date, [resultField]: result.value }]
      })
      .map((item, index) => ({ ...item, index }))
  }

  const graphResults = selectedTests
    .filter((t: TestType) => t.results)
    .map((test: TestType) => {
      const resultsWithGraph = test.results.filter(
        (result: ResultType) => result.chart,
      )
      return resultsWithGraph.map((result: ResultType) => {
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
