import React from "react"
import FormSection from "../pages/dashboard/Main/Popup/AddPatient/Form/FormSection"

type InputSectionType = {
  label: string
  datas: React.ReactNode
  block?: boolean
}

export default function InputSection({
  label,
  datas,
  block,
}: InputSectionType) {
  return (
    <FormSection label={label} block={block}>
      {datas}
    </FormSection>
  )
}
