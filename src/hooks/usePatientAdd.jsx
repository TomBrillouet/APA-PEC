import { useContext, useState } from "react"
import { EMPTY_PATIENT } from "../enums/patient"
import { MainContext } from "../context/MainContext"

export const usePatientAdd = (initialValues = EMPTY_PATIENT) => {
  const [inputsValue, setInputsValue] = useState(initialValues)
  const { handleBilanDataChange } = useContext(MainContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    const addressFields = ["street", "city", "cp"]
    const imcFields = ["height", "weight"]
    if (imcFields.includes(name)) {
      handleBilanDataChange(e)
    }

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
