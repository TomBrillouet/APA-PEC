import { proInputs } from "../config/proInputs.jsx"
import Input from "../../../../../../reusable/Input.jsx"
import Button from "../../../../../../reusable/Button.jsx"
import styled from "styled-components"
import { MainContext } from "../../../../../../../context/MainContext.jsx"
import { useContext } from "react"
import { usePatientAdd } from "../../../../../../../hooks/usePatientAdd.jsx"
import { toastInfo } from "../../../../../../../datas/toastmessages.js"
export default function BodyPro() {
  const { pro, proSubmit, toggleProInfo } = useContext(MainContext)
  const { inputsValue, handleChange } = usePatientAdd(pro)

  const handleSubmit = (inputsValue) => {
    toggleProInfo()
    if (inputsValue === pro) return
    proSubmit(inputsValue)
    toastInfo("Les informations du professionnel ont été modifiées")
  }
  return (
    <BodyProStyled>
      {proInputs.map((input) => (
        <Input
          isRequired={input.isRequired}
          label={input.label}
          name={input.name}
          onChange={handleChange}
          type={input.type}
          key={input.name}
          placeholder={input.label}
          value={inputsValue[input.name]}
        />
      ))}
      <Button
        label={"Enregistrer les informations du professionnel"}
        onClick={() => handleSubmit(inputsValue)}
        version="submit"
      />
    </BodyProStyled>
  )
}

const BodyProStyled = styled.div`
  padding: 8px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`
