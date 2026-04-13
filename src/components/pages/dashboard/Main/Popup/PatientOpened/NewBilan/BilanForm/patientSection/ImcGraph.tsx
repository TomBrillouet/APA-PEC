import { useMemo } from "react"
import { getImc } from "../../../../../../../../../utils/math.js"
import SimpleLineGraph from "../../SimpleLineGraph.js"
import {
  BilanType,
  PatientType,
} from "../../../../../../../../../types/index.js"

export default function ImcGraph({
  selectedPatient,
}: {
  selectedPatient: PatientType
}) {
  const dataImc = useMemo(() => {
    return selectedPatient.bilans
      .slice()
      .reverse()
      .filter((bilan: BilanType) => bilan.height && bilan.weight)
      .map((bilan: BilanType, index: number) => {
        return {
          date: bilan.date,
          imc: getImc(bilan.weight, bilan.height).toFixed(2),
          index: index,
        }
      })
  }, [selectedPatient.bilans])
  if (dataImc.length > 1) {
    return <SimpleLineGraph data={dataImc} y="imc" legend={"IMC"} />
  }
}
