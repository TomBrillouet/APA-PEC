import { useCallback, useState } from "react"
import { getImc } from "../utils/math"

export const useBilanForm = (initialvalues, listTests) => {
  const [bilanData, setBilanData] = useState({
    date: new Date().toISOString().split("T")[0],
    tests:
      initialvalues?.map((test) => {
        const testConfig = listTests?.find((t) => t.name === test.name)
        return {
          ...test,
          results: (testConfig?.results ?? test.results).map((result) => ({
            ...result,
            value: "",
          })),
          remarques: "",
        }
      }) || [],
    height: 0,
    weight: 0,
    imc: 0,
    reco: "",
  })

  const handleBilanDataChange = (e) => {
    const { name, value } = e.target
    setBilanData((prev) => {
      const updated = { ...prev, [name]: value }
      return {
        ...updated,
        imc: getImc(updated.weight, updated.height),
      }
    })
  }

  const testsSelectChange = (testsSelected) => {
    const formattedTests = testsSelected.map((option) => {
      const testConfig = listTests?.find((t) => t.name === option.value)
      const existingTests = bilanData.tests.find(
        (element) => element.name === option.value,
      )
      if (existingTests) return existingTests
      return {
        name: option.value,
        remarques: "",
        results: testConfig?.results.map((result) => ({ ...result })),
      }
    })
    setBilanData((prev) => ({ ...prev, tests: formattedTests }))
  }

  const handleRemarquesChange = useCallback((testName, value) => {
    setBilanData((prev) => ({
      ...prev,
      tests: prev.tests.map((test) =>
        test.name === testName ? { ...test, remarques: value } : test,
      ),
    }))
  }, [])

  const handleResultChange = useCallback((testName, field, value) => {
    setBilanData((prev) => ({
      ...prev,
      tests: prev.tests.map((test) =>
        test.name === testName
          ? {
              ...test,
              results: test.results.map((result) =>
                result.field === field ? { ...result, value } : result,
              ),
            }
          : test,
      ),
    }))
  }, [])
  return {
    handleResultChange,
    handleRemarquesChange,
    testsSelectChange,
    handleBilanDataChange,
    bilanData,
  }
}
