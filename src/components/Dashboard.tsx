import { useState } from "react"
import Card from "./Card"
import LineChartComponent from "./charts/LineChart"
import BarChartComponent from "./charts/BarChart"
import { salesData, usersData } from "../data/chartData"

type ChartType = "line" | "bar"
type DataType = "sales" | "users"

interface Widget {
  id: number
  title: string
  chartType: ChartType
  dataType: DataType
}

function Dashboard() {
  const [widgets, setWidgets] = useState<Widget[]>([]) // ✅ EMPTY

  const addWidget = () => {
    const newWidget: Widget = {
      id: Date.now(),
      title: "SALES LINE CHART",
      chartType: "line",
      dataType: "sales",
    }

    setWidgets((prev) => [...prev, newWidget])
  }

  const updateWidget = (
    id: number,
    field: "chartType" | "dataType",
    value: string
  ) => {
    setWidgets((prev) =>
      prev.map((w) => {
        if (w.id !== id) return w

        const updated = { ...w, [field]: value }

        return {
          ...updated,
          title: `${updated.dataType.toUpperCase()} ${updated.chartType.toUpperCase()} CHART`,
        }
      })
    )
  }

  const removeWidget = (id: number) => {
    setWidgets((prev) => prev.filter((w) => w.id !== id))
  }

  const renderChart = (widget: Widget) => {
    const data =
      widget.dataType === "sales" ? salesData : usersData

    const dataKey =
      widget.dataType === "sales" ? "sales" : "users"

    if (widget.chartType === "line") {
      return (
        <LineChartComponent data={data} dataKey={dataKey} color="#4CAF50" />
      )
    }

    return (
      <BarChartComponent data={data} dataKey={dataKey} color="#FF9800" />
    )
  }

  return (
    <div
      style={{
        padding: "30px",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#111827",
        }}
      >
        Analytics Dashboard
      </h1>

      {/* BUTTON */}
      <button
        onClick={addWidget}
        style={{
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          background: "#4CAF50",
          color: "white",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        + Add Widget
      </button>

      {/* ✅ EMPTY STATE */}
      {widgets.length === 0 && (
  <div
    style={{
      marginTop: "100px",
      textAlign: "center",
      color: "#666",
      maxWidth: "400px",
      marginLeft: "auto",
      marginRight: "auto",
    }}
  >
          <h3>No widgets yet 📊</h3>
          <p>Click "Add Widget" to create your first chart</p>
        </div>
      )}

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {widgets.map((w) => (
          <Card key={w.id} title={w.title}>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <select
                value={w.chartType}
                onChange={(e) =>
                  updateWidget(w.id, "chartType", e.target.value)
                }
              >
                <option value="line">Line</option>
                <option value="bar">Bar</option>
              </select>

              <select
                value={w.dataType}
                onChange={(e) =>
                  updateWidget(w.id, "dataType", e.target.value)
                }
              >
                <option value="sales">Sales</option>
                <option value="users">Users</option>
              </select>

              <button
                onClick={() => removeWidget(w.id)}
                style={{
                  background: "#ff4d4f",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>

            {renderChart(w)}
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Dashboard