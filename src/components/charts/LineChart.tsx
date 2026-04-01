import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

interface Props {
  data: any[]
  dataKey: string
  color?: string
}

function LineChartComponent({ data, dataKey, color = "#4CAF50" }: Props) {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey={dataKey} stroke={color} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChartComponent