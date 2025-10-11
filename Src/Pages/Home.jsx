import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <section className="home-page" style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "2rem" }}>
      <div className="hero" style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>¡SorteosGordos!</h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>60,000 boletos → $10 cada uno</p>
        <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Premio: $500,000</p>
        <button style={{ padding: "1rem 2rem", fontSize: "1.2rem", backgroundColor: "#FFD700", color: "#000", border: "none", borderRadius: "8px", cursor: "pointer" }}>Comprar tu boleto ahora</button>
      </div>

      <div className="cards-container" style={{ display: "flex", justifyContent: "space-around", marginTop: "2rem" }}>
        <Card title="Total Boletos">60,000</Card>
        <Card title="Boletos Vendidos">0</Card>
        <Card title="Boletos Disponibles">60,000</Card>
      </div>

      <div className="slogan" style={{ textAlign: "center", marginTop: "2rem", fontSize: "1.2rem" }}>
        ¡Tu oportunidad de ganar en grande empieza aquí!
      </div>
    </section>
  );
}
