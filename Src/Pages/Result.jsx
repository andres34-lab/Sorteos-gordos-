import React from "react";
import { useTickets } from "../hooks/useTickets";

export default function Results() {
  const { tickets } = useTickets();
  const sold = tickets.filter(t => t.status === "reserved");

  return (
    <section style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "2rem" }}>
      <h2>Boletos Vendidos</h2>
      {sold.length === 0 && <p>Ningún boleto vendido aún.</p>}
      <ul>
        {sold.map(t => (
          <li key={t.id}>#{t.number} — {t.owner}</li>
        ))}
      </ul>
    </section>
  );
}
