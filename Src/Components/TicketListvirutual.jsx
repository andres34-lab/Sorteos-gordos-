import React from "react";
import { FixedSizeGrid as Grid } from "react-window";
import Ticket from "./Ticket";

export default function TicketListVirtual({ tickets, onSelect }) {
  const columnCount = 10; // número de columnas
  const rowCount = Math.ceil(tickets.length / columnCount);
  const columnWidth = 100;
  const rowHeight = 80;
  
  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= tickets.length) return null;
    const ticket = tickets[index];
    return (
      <div style={style}>
        <Ticket ticket={ticket} onSelect={onSelect} />
      </div>
    );
  };

  return (
    <Grid
      columnCount={columnCount}
      rowCount={rowCount}
      columnWidth={columnWidth}
      rowHeight={rowHeight}
      height={600}  // altura del contenedor
      width={columnCount * columnWidth + 20} // ancho del contenedor
    >
      {Cell}
    </Grid>
  );
}
