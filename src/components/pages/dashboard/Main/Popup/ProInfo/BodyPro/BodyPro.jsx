import { proInputs } from "../config/proInputs.jsx"
import Input from "../../../../../../reusable/Input.jsx"
import Button from "../../../../../../reusable/Button.jsx"
import styled from "styled-components"
import { MainContext } from "../../../../../../../context/MainContext.jsx"
import { useContext } from "react"
import { useForm } from "../../../../../../../hooks/useForm.jsx"
import { toastInfo } from "../../../../../../../datas/toastmessages.js"
export default function BodyPro() {
  const { pro, proSubmit, toggleProInfo } = useContext(MainContext)
  const { inputsValue, handleChange } = useForm(pro)

  const handleSubmit = (inputsValue) => {
    toggleProInfo()
    if (inputsValue === pro) return
    proSubmit(inputsValue)
    toastInfo("Les informations du professionnel ont été modifiées")
  }
  return (
    <BodyProStyled onSubmit={() => handleSubmit(inputsValue)}>
      <div className="inputs">
        {proInputs.map((input) => (
          <Input
            isRequired={input.isRequired}
            label={input.label}
            name={input.name}
            onChange={handleChange}
            type={input.type}
            key={input.name}
            placeholder={input.label}
            value={inputsValue[input.name] ?? ""}
            minLength={input.minLength}
            pattern={input.pattern}
          />
        ))}
      </div>
      <Button
        label={"Enregistrer les informations du professionnel"}
        version="submit"
        type="submit"
      />
    </BodyProStyled>
  )
}

const BodyProStyled = styled.form`
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`
