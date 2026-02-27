import { getImc } from "../../../../../../../../../utils/math.js"
import SimpleLineGraph from "../../SimpleLineGraph.jsx"

export default function ImcGraph({ selectedPatient }) {
  const dataImc = selectedPatient.bilans
    .slice()
    .reverse()
    .filter((bilan) => bilan.height && bilan.weight)
    .map((bilan) => {
      return {
        date: bilan.date,
        imc: getImc(bilan.weight, bilan.height),
      }
    })
  return (
    <SimpleLineGraph
      data={dataImc}
      x="date"
      y="imc"
      legend={"IMC"}
      width={"100%"}
    />
  )
}
