import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts"
import { theme } from "../../../../../../../theme"
import { memo } from "react"
function SimpleLineGraph({ data, x, y, legend }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
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
        <YAxis width={30} dataKey={y} tick={{ fontSize: 10 }} />
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
    </ResponsiveContainer>
  )
}

export default memo(SimpleLineGraph)
