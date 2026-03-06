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
function SimpleLineGraph({ data, y, legend }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 60,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis
          dataKey="index"
          tick={{ fontSize: 10 }}
          tickFormatter={(value) => data[value].date}
        />
        <YAxis width={30} dataKey={y} tick={{ fontSize: 10 }} />
        <Tooltip labelFormatter={(value) => data[value].date} />
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
