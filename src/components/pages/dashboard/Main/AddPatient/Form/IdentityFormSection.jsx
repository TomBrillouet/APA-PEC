import Select from "react-select"
import FormSection from "./FormSection"

export default function IdentityFormSection({ onChange, datas }) {
  return (
    <FormSection label={"Identité"}>
      <div className="field">
        <label>Sexe</label>
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
      </div>
      {datas}
    </FormSection>
  )
}
