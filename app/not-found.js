export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>404</h1>
        <p style={{ marginTop: "12px", fontSize: "18px", color: "#555" }}>
          This page could not be found.
        </p>
      </div>
    </main>
  );
}
