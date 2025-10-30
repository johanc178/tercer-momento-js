document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "🏠 Volver al inicio";
  Object.assign(btn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "12px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
    fontSize: "14px",
  });
  btn.onclick = () => {
    window.location.href = window.location.origin + '/index.html';
  };
  document.body.appendChild(btn);
});
