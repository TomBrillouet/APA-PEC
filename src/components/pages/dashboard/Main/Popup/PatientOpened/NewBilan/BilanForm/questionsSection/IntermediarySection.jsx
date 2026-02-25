import { BILAN_FIELDS } from "../../../../../../../../../datas/bilanConfig"
import InputSection from "../../../../../../../../reusable/InputSection"

export default function IntermediarySection({ mapTextAreas }) {
  return (
    <InputSection
      datas={mapTextAreas(BILAN_FIELDS.intermediaire.textareas)}
      label={"Développement du patient"}
      block
    />
  )
}
