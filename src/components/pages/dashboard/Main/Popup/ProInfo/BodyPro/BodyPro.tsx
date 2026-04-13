import { proInputs } from "../config/proInputs.js"
import Input from "../../../../../../reusable/Input.js"
import Button from "../../../../../../reusable/Button.js"
import styled from "styled-components"
import { MainContext } from "../../../../../../../context/MainContext.js"
import { useContext } from "react"
import { useForm } from "../../../../../../../hooks/useForm.js"
import {
  toastError,
  toastInfo,
} from "../../../../../../../datas/toastmessages.js"
import { TOAST_LABELS } from "../../../../../../../constants/labels/toasts.js"
import { ProType } from "../../../../../../../types/index.js"

export default function BodyPro() {
  const { pro, proSubmit, toggleProInfo } = useContext(MainContext)
  const { inputsValue, handleChange } = useForm(pro as ProType)
  if (!pro) return null
  const handleSubmit = (inputsValue: ProType) => {
    toggleProInfo()
    if (inputsValue === pro) {
      toastError(`${TOAST_LABELS.proNotModified}`)
      return
    }
    proSubmit(inputsValue)
    toastInfo(`${TOAST_LABELS.proModified}`)
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
