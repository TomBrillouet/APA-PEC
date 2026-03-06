import { useContext, useState } from "react"
import { MainContext } from "../context/MainContext"

export const useForm = (initialValues) => {
  const [inputsValue, setInputsValue] = useState(initialValues)
  const { handleBilanDataChange } = useContext(MainContext)

  const handleChange = (e, index) => {
    const { name, value, checked, type } = e.target
    const addressFields = ["street", "city", "cp"]
    const imcFields = ["height", "weight"]
    const resultsFields = ["field", "chart"]
    if (imcFields.includes(name)) {
      handleBilanDataChange(e)
    }

    setInputsValue((prev) => {
      if (addressFields.includes(name)) {
        return { ...prev, address: { ...prev.address, [name]: value } }
      }
      if (resultsFields.includes(name)) {
        const isCheckbox = type === "checkbox"
        const updatedResults = prev.results.map((result, i) => {
          return i === index
            ? { ...result, [name]: isCheckbox ? checked : value }
            : result
        })
        return { ...prev, results: updatedResults }
      }
      return { ...prev, [name]: value }
    })
  }

  const sexSelectChange = (sexSelected) =>
    setInputsValue((prev) => ({ ...prev, sex: sexSelected.value }))

  const handleSpecificInputsValue = (globalValue, key, specificValue) => {
    setInputsValue({ ...globalValue, [key]: specificValue })
  }

  const handleAddNewTest = () => {
    setInputsValue((prev) => {
      return {
        ...prev,
        results: [...prev.results, { field: "", chart: false, value: null }],
      }
    })
  }

  const handleDeleteTest = (index) => {
    setInputsValue((prev) => {
      return {
        ...prev,
        results: prev.results.filter((_, i) => i !== index),
      }
    })
  }

  return {
    inputsValue,
    sexSelectChange,
    handleChange,
    handleSpecificInputsValue,
    handleAddNewTest,
    handleDeleteTest,
  }
}
