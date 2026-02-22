import { useState } from "react"
import { EMPTY_PATIENT } from "../enums/patient"

export const usePatientAdd = (initialValues = EMPTY_PATIENT) => {
  const [inputsValue, setInputsValue] = useState(initialValues)

  const handleChange = (e) => {
    const { name, value } = e.target
    const addressFields = ["street", "city", "cp"]

    setInputsValue((prev) => {
      if (addressFields.includes(name)) {
        return { ...prev, address: { ...prev.address, [name]: value } }
      }
      return { ...prev, [name]: value }
    })
  }

  const sexSelectChange = (sexSelected) =>
    setInputsValue((prev) => ({ ...prev, sex: sexSelected.value }))

  const handleSpecificInputsValue = (globalValue, key, specificValue) => {
    setInputsValue({ ...globalValue, [key]: specificValue })
  }

  return {
    inputsValue,
    sexSelectChange,
    handleChange,
    handleSpecificInputsValue,
  }
}
