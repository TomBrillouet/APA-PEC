import FormSection from "../pages/dashboard/Main/Popup/AddPatient/Form/FormSection"

export default function InputSection({ label, datas, block }) {
  return (
    <FormSection label={label} block={block}>
      {datas}
    </FormSection>
  )
}
