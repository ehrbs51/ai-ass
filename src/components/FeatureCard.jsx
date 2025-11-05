export default function FeatureCard({ icon, title, desc }) {
  return (
    <div
      className="card"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.015))",
        border: "1px solid rgba(42,51,84,.8)",
        borderRadius: 16,
        padding: "28px 22px",
        textAlign: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,.35)",
        transition: "transform .22s ease, box-shadow .22s ease, border-color .22s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,.45)";
        e.currentTarget.style.borderColor = "rgba(99,102,241,.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,.35)";
        e.currentTarget.style.borderColor = "rgba(42,51,84,.8)";
      }}
    >
      <div style={{ marginBottom: 14 }}>{icon}</div>
      <div className="feature-title" style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>
        {title}
      </div>
      <div className="feature-desc" style={{ color: "#9aa4bd", fontSize: 14 }}>
        {desc}
      </div>
    </div>
  );
}
