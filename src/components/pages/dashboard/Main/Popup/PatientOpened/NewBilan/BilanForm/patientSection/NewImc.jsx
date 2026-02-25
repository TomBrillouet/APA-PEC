import { getImc } from "../../../../../../../../../utils/math"

export default function NewImc({ bilanData }) {
  return (
    <div>
      Nouvel IMC :{" "}
      {bilanData.weight && bilanData.height
        ? getImc(bilanData.weight, bilanData.height)
        : ""}
    </div>
  )
}
