import { useMemo } from "react"
import { getImc } from "../../../../../../../../../utils/math.js"
import SimpleLineGraph from "../../SimpleLineGraph.jsx"

export default function ImcGraph({ selectedPatient }) {
  const dataImc = useMemo(() => {
    return selectedPatient.bilans
      .slice()
      .reverse()
      .filter((bilan) => bilan.height && bilan.weight)
      .map((bilan, index) => {
        return {
          date: bilan.date,
          imc: getImc(bilan.weight, bilan.height),
          index: index,
        }
      })
  }, [selectedPatient.bilans])
  if (dataImc.length > 1) {
    return (
      <SimpleLineGraph data={dataImc} y="imc" legend={"IMC"} width={"100%"} />
    )
  }
}
