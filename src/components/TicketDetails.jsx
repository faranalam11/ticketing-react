import React from 'react';
import { useParams } from 'react-router-dom';

const TicketDetails = () => {
  const { id } = useParams();
  const ticket = tickets.find((ticket) => ticket.id === id);

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">Ticket Details</h1>
      <p><strong>Email:</strong> {ticket.email}</p>
      <p><strong>Subject:</strong> {ticket.subject}</p>
      <p><strong>Description:</strong> {ticket.description}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Channel:</strong> {ticket.channal}</p>
      <p><strong>Date:</strong> {ticket.date}</p>
    </div>
  );
};

export default TicketDetails;
