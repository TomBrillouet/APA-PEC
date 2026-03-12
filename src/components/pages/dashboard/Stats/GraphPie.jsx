import { Pie, PieChart, Tooltip } from "recharts"
import { getMen, getWomen } from "./helpers/stats"

export default function GraphPie({ patients }) {
  const data = [
    { name: "Homme", value: getMen(patients), fill: "#4a90d9" },
    { name: "Femme", value: getWomen(patients), fill: "#e879a0" },
  ]
  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "200px",
        maxHeight: "15vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive
      />
      <Tooltip />
    </PieChart>
  )
}
