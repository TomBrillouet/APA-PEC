import { useState } from "react"
import { tests } from "../datas/tests"

export const useBilanForm = () => {
  const [bilanData, setBilanData] = useState({
    date: new Date().toISOString().split("T")[0],
    tests: [],
  })

  const handleBilanDateChange = (e) =>
    setBilanData((prev) => ({ ...prev, date: e.target.value }))

  const testsSelectChange = (testsSelected) => {
    const formattedTests = testsSelected.map((option) => {
      const testConfig = tests.find((t) => t.name === option.value)
      const existingTests = bilanData.tests.find(
        (element) => element.name === option.value
      )
      if (existingTests) return existingTests
      return {
        name: option.value,
        remarques: "",
        results: testConfig.results.map((result) => ({ ...result })),
      }
    })
    setBilanData((prev) => ({ ...prev, tests: formattedTests }))
  }

  const handleRemarquesChange = (testName, value) => {
    setBilanData((prev) => ({
      ...prev,
      tests: prev.tests.map((test) =>
        test.name === testName ? { ...test, remarques: value } : test
      ),
    }))
  }

  const handleResultChange = (testName, field, value) => {
    setBilanData((prev) => ({
      ...prev,
      tests: prev.tests.map((test) =>
        test.name === testName
          ? {
              ...test,
              results: test.results.map((result) =>
                result.field === field ? { ...result, value } : result
              ),
            }
          : test
      ),
    }))
  }
  return {
    handleResultChange,
    handleRemarquesChange,
    testsSelectChange,
    handleBilanDateChange,
    bilanData,
  }
}
