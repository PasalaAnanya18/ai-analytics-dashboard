import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, overflow: "auto" }}>
        <Dashboard />
      </div>
    </div>
  )
}

export default App