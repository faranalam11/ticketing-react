import { FolderAddIcon, PlusCircleIcon } from '@heroicons/react/outline';
import React from 'react';

const Sidebar = ({ onAddTicketClick, setTickets, tickets }) => {
  const filterTickets = (status) => {
    setTickets(tickets.filter(ticket => ticket.status === status));
  };

  const filterPriorityTickets = (priority,p) => {
    setTickets(tickets.filter(ticket => ticket.priority === priority || ticket.priority === p));
  };

  const filterAssignedTickets = (assignedTo) => {
    setTickets(tickets.filter(ticket => ticket.assignedTo === assignedTo));
  };

  return (
    <div className="flex flex-col h-screen w-80 bg-white border-x-2 rounded text-black">
      <div className="flex items-center">
        <span className="flex-1 text-blue-600 text-2xl ml-2 p-3">Views</span>
        <button className='hover:bg-blue-300 cursor-pointer'><FolderAddIcon className='w-8 h-8 flex' /></button>
        <button
          className='hover:bg-blue-300 cursor-pointer'
          onClick={onAddTicketClick}
        >
          <PlusCircleIcon className='w-8 h-8 flex' />
        </button>
      </div>
      <hr className="border-black-500" />
      <ul className="flex flex-col my-3 ">
        <li className="p-2 hover:bg-blue-300 cursor-pointer rounded mx-2" onClick={() => filterTickets('PEN')}>All pendings</li>
        <li className="p-2 hover:bg-blue-300 cursor-pointer rounded mx-2" onClick={() => filterTickets('RES')}>All completed</li>
        <li className="p-2 hover:bg-blue-300 cursor-pointer rounded mx-2" onClick={() => filterPriorityTickets('M','H')}>Assigned to me</li>
        <li className="p-2 hover:bg-blue-300 cursor-pointer rounded mx-2" onClick={() => filterTickets('RES')}>Completed by me</li>
      </ul>
      <hr className="border-black-500" />
      <h3 className='my-3 mx-2'>Filter saved for Designation</h3>

    </div>
  );
};

export default Sidebar;