import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
  PencilAltIcon,
  TrashIcon,
  PhoneIcon,
  ChatIcon,
  MailIcon,
  FlagIcon,
  ArchiveIcon,
} from "@heroicons/react/outline";
import TicketForm from "./TicketForm";

const TicketItem = ({ ticket, onDelete, onStatusChange, onEdit }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleEditForm = () => {
    setIsEditing(!isEditing);
  };

  const handleStatusChange = (e) => {
    const updatedTicket = { ...ticket, status: e.target.value };
    onStatusChange(updatedTicket);
  };

  const navigate = useNavigate();
  const handleTicketDetail = (id) => {
    navigate(`/tickets/${id}`);
  }

  return (
    <div className=" p-3 bg-white font-serif border m-1 rounded-lg cursor-pointer hover:bg-gray-200">
      <div className="flex items-center">
        <button className="p-1 border border-gray-300 rounded mr-3" onClick={toggleDetails}>
          {showDetails ? <ChevronDoubleUpIcon className="w-3 h-3" /> : <ChevronDoubleDownIcon className="w-3 h-3" />}
        </button>

        <div className="text-s flex-1 text-gray-500">{ticket.email.slice(0, 15)}{ticket.email.length > 15 ? "..." : ""}</div>

        <span className="w-6 rounded h-6 mr-5">
          {ticket.channal === 'MAIL' ? <MailIcon /> : ticket.channal === 'CALL' ? <PhoneIcon /> : <ChatIcon />}
        </span>
        <span className=" text-xs bg-red-200 rounded  mr-10 p-1">{ticket.channal}</span>
        <span className="flex-1 mx-5">{ticket.subject.slice(0, 20)}{ticket.subject.length > 20 ? "..." : ""}</span>
        <span className={` text-xs ${ticket.status === 'RES' ? 'bg-yellow-100' : ticket.status === 'OPN' ? 'bg-yellow-200' : 'bg-yellow-400'} rounded  mr-10 p-1`}>{ticket.status}</span>
        <span className={` text-xs ${ticket.priority === 'L' ? 'bg-green-100' : ticket.priority === 'M' ? 'bg-green-200' : 'bg-green-400'} rounded  mr-10 p-1`}>{ticket.priority}</span>
        <span className="flex-1 ">{ticket.date}</span>
        <div className="flex items-center space-x-2">
          <select className="p-1 border border-gray-300 rounded text-xs" value={ticket.status} onChange={handleStatusChange}>
            <option value="OPN">Open</option>
            <option value="PEN">Pending</option>
            <option value="RES">Resolved</option>
          </select>
          <button className="p-1 border border-gray-300 rounded bg-blue-400" onClick={toggleEditForm}>
            <PencilAltIcon className="w-4 h-4" />
          </button>
          <button className="p-1 border border-gray-300 rounded bg-red-400" onClick={() => onDelete(ticket.id)}>
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      {showDetails && (
        <div className="mt-2">
          <div className="text-s text-black">{ticket.subject}</div>
          <div className="text-s text-gray-600">{ticket.description}</div>
          <div className="flex items-center space-x-2 mt-2">
            <button className="p-1 border border-gray-300 rounded">
              <PhoneIcon className="w-3 h-3" />
            </button>
            <button className="p-1 border border-gray-300 rounded">
              <ChatIcon className="w-3 h-3" />
            </button>
            <button className="p-1 border border-gray-300 rounded">
              <MailIcon className="w-3 h-3" />
            </button>
            <button className="p-1 border border-gray-300 rounded">
              <FlagIcon className="w-3 h-3" />
            </button>
            <button className="p-1 border border-gray-300 rounded">
              <ArchiveIcon className="w-3 h-3" />
            </button>
            {/* <button className="p-1 border border-gray-300 rounded bg-blue-400" onClick={handleTicketDetail(ticket.id)}>
              Show Details
            </button> */}
          </div>
        </div>
      )}
      {isEditing && (
        <TicketForm border border-gray-30
          initialValues={ticket}
          onSubmit={(updatedTicket) => {
            onEdit(updatedTicket);
            setIsEditing(false);
          }}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default TicketItem;

