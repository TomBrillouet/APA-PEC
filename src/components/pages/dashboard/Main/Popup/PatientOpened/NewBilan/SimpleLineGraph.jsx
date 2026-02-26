import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts"
export default function SimpleLineGraph({ data, x, y, legend, width }) {
  return (
    <LineChart
      style={{
        width: "100%",
        maxWidth: width,
        height: "100%",
        maxHeight: "40vh",
        aspectRatio: 1.618,
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
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={x} tick={{ fontSize: 10 }} />
      <YAxis width="auto" dataKey={y} tick={{ fontSize: 10 }} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={y}
        stroke="#4CAF50"
        activeDot={{ r: 8 }}
        name={legend}
      />
    </LineChart>
  )
}
