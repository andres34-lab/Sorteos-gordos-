import { useState, useEffect } from "react";

export function useTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Genera 60,000 boletos automáticamente
    const generatedTickets = Array.from({ length: 60000 }, (_, i) => ({
      id: i + 1,
      number: (i + 1).toString().padStart(5, "0"),
      owner: null,
      status: "available"
    }));
    setTickets(generatedTickets);
  }, []);

  function reserveTicket(id, ownerName) {
    setTickets(prev =>
      prev.map(t =>
        t.id === id ? { ...t, owner: ownerName, status: "reserved" } : t
      )
    );
  }

  function resetTickets() {
    setTickets(prev =>
      prev.map(t => ({ ...t, owner: null, status: "available" }))
    );
  }

  return { tickets, reserveTicket, resetTickets };
}
