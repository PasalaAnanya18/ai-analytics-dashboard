function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#1e1e2f",
        color: "white",
        padding: "20px",
        height: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Analytics Dashboard</h2>

      <p style={{ margin: "15px 0", cursor: "pointer" }}>Dashboard</p>
      <p style={{ margin: "15px 0", cursor: "pointer" }}>Data</p>
      <p style={{ margin: "15px 0", cursor: "pointer" }}>Settings</p>
    </div>
  )
}

export default Sidebar