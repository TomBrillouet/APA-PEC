import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts"
import { theme } from "../../../../../../../theme"
export default function SimpleLineGraph({ data, x, y, legend, width }) {
  return (
    <LineChart
      style={{
        width: "100%",
        maxWidth: width,
        height: "100%",
        maxHeight: "40vh",
        aspectRatio: 1,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey={x} tick={{ fontSize: 10 }} />
      <YAxis width="auto" dataKey={y} tick={{ fontSize: 10 }} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={y}
        stroke={theme.colors.primary}
        activeDot={{ r: 6 }}
        name={legend}
      />
    </LineChart>
  )
}
