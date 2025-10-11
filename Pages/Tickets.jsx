import React, { useState } from "react";
import { useTickets } from "../hooks/useTickets";
import TicketListVirtual from "../components/TicketListVirtual";
import TicketForm from "../components/TicketForm";

export default function Tickets() {
  const { tickets, reserveTicket, resetTickets } = useTickets();
  const [selectedTicket, setSelectedTicket] = useState(null);

  function handleSelect(id) {
    setSelectedTicket(id);
  }

  function handleReserve(name) {
    reserveTicket(selectedTicket, name);
    setSelectedTicket(null);
  }

  return (
    <section style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "2rem" }}>
      <h2>Boletos Disponibles</h2>
      <button
        onClick={resetTickets}
        style={{ marginBottom: "1rem", padding: "0.5rem 1rem", backgroundColor: "#FFD700", color: "#000", border: "none", borderRadius: "6px", cursor: "pointer" }}
      >
        Resetear Boletos
      </button>
      <TicketListVirtual tickets={tickets} onSelect={handleSelect} />
      {selectedTicket && <TicketForm onSubmit={handleReserve} />}
    </section>
  );
}
