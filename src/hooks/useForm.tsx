import React, { useState } from "react"
import { BilanType, PatientType, ProType, TestType } from "../types"

export const useForm = <T extends PatientType | BilanType | ProType | TestType>(
  initialValues: T,
) => {
  const [inputsValue, setInputsValue] = useState<T>(initialValues)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setInputsValue((prev) => {
      return { ...prev, [name]: value }
    })
  }

  return {
    inputsValue,
    handleChange,
    setInputsValue,
  }
}
