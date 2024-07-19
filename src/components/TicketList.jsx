import React from "react";
import TicketItem from "./TicketItem";

const TicketList = ({ tickets, onRemoveTicket, onEditTicket, selectAll, setTickets }) => {
  const handleStatusChange = (updatedTicket) => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === updatedTicket.id ? updatedTicket : ticket
    );
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  const handleEditTicket = (updatedTicket) => {
    onEditTicket(updatedTicket);
  };

  return (
    <div className="p-2">
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          onDelete={onRemoveTicket}
          onStatusChange={handleStatusChange}
          onEdit={handleEditTicket}
        />
      ))}
    </div>
  );
};

export default TicketList;
