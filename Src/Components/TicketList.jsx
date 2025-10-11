import React from "react";
import Ticket from "./Ticket";

export default function TicketList({ tickets, onSelect }) {
  // Para rendimiento, podemos renderizar solo los primeros 2000 visualmente,
  // o implementar virtualización (opcional con react-window/react-virtualized)
  const ticketsToShow = tickets.slice(0, 2000); 

  return (
    <div className="ticket-list">
      {ticketsToShow.map(ticket => (
        <Ticket key={ticket.id} ticket={ticket} onSelect={onSelect} />
      ))}
      {tickets.length > 2000 && (
        <p style={{ textAlign: "center", marginTop: "1rem", color: "#FFD700" }}>
          Mostrando 2,000 boletos de {tickets.length}. Desplaza para ver más.
        </p>
      )}
    </div>
  );
}
