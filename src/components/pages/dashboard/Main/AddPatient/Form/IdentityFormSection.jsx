import Select from "react-select"
import FormSection from "./FormSection"
import InputField from "../../../../../reusable/InputField"

export default function IdentityFormSection({ onChange, datas }) {
  return (
    <FormSection label={"Identité"}>
      <InputField className="field" label={"Sexe"}>
        <Select
          required
          name="sex"
          options={[
            { value: "man", label: "Homme" },
            { value: "woman", label: "Femme" },
          ]}
          classNamePrefix="select"
          onChange={onChange}
        />
      </InputField>
      {datas}
    </FormSection>
  )
}
