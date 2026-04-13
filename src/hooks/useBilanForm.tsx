import React, { useCallback, useState } from "react"
import { getImc } from "../utils/math"
import {
  BilanType,
  ListTestsType,
  ResultType,
  TestSelectedType,
  TestsType,
  TestType,
} from "../types"
import { MultiValue } from "react-select"

export const useBilanForm = (
  initialvalues: TestsType | null,
  listTests: ListTestsType,
) => {
  const [bilanData, setBilanData] = useState<BilanType>({
    date: new Date().toISOString().split("T")[0],
    tests:
      initialvalues?.map((test) => {
        const testConfig = listTests?.find((t) => t.id === test.id)
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
    type: "intermediaire",
    id: "",
  })

  const handleBilanDataChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setBilanData((prev) => {
      const updated = { ...prev, [name]: value }
      return {
        ...updated,
        imc: parseFloat(getImc(updated.weight, updated.height).toFixed(2)),
      }
    })
  }

  const testsSelectChange = (testsSelected: MultiValue<TestSelectedType>) => {
    const formattedTests = testsSelected.map((option) => {
      const testConfig = listTests?.find((t: TestType) => t.id === option.value)
      const existingTests = bilanData.tests.find(
        (test: TestType) => test.id === option.value,
      )
      if (existingTests) return existingTests
      return {
        id: testConfig?.id ?? "",
        description: testConfig?.description ?? "",
        name: testConfig?.name ?? "",
        remarques: "",
        results: (testConfig?.results ?? []).map((result: ResultType) => ({
          ...result,
        })),
      }
    })
    setBilanData((prev) => ({ ...prev, tests: formattedTests }))
  }

  const handleRemarquesChange = useCallback((id: string, value: string) => {
    setBilanData((prev) => ({
      ...prev,
      tests: prev.tests.map((test: TestType) =>
        test.id === id ? { ...test, remarques: value } : test,
      ),
    }))
  }, [])

  const handleResultChange = useCallback(
    (id: string, field: string, value: string) => {
      setBilanData((prev) => ({
        ...prev,
        tests: prev.tests.map((test: TestType) =>
          test.id === id
            ? {
                ...test,
                results: test.results.map((result) =>
                  result.field === field ? { ...result, value } : result,
                ),
              }
            : test,
        ),
      }))
    },
    [],
  )
  return {
    handleResultChange,
    handleRemarquesChange,
    testsSelectChange,
    handleBilanDataChange,
    bilanData,
  }
}
