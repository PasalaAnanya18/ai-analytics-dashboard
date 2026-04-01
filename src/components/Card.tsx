interface Props {
  title: string
  children: React.ReactNode
}

function Card({ title, children }: Props) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ marginBottom: "10px", color: "#555" }}>{title}</h3>
      {children}
    </div>
  )
}

export default Card