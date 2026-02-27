import { BILAN_FIELDS } from "../../../../../../../../../datas/bilanConfig"
import InputSection from "../../../../../../../../reusable/InputSection"

export default function FinalSection({ mapTextAreas }) {
  return (
    <InputSection
      datas={mapTextAreas(BILAN_FIELDS.final.textareas)}
      label={"Développement du patient"}
      block
    />
  )
}
