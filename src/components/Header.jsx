import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, DotsVerticalIcon, ViewListIcon, ViewGridIcon } from '@heroicons/react/outline';

const Header = ({
  search,
  setSearch,
  selectAll,
  handleSelectAll,
  ticketsPerPage,
  handleTicketsPerPageChange,
  currentPage,
  handlePageChange,
  totalTickets,
}) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="top-0 z-10 w-full text-sm flex items-center p-2 bg-white border-b border-gray-300">
      <input type="checkbox" className="mr-2" checked={selectAll} onChange={handleSelectAll} />
      <input
        type="text"
        placeholder="Search tickets..."
        value={search}
        onChange={handleSearchChange}
        className="flex-1 p-2 border border-gray-300 rounded mr-2"
      />
      <div className="flex items-center space-x-2">
        <label className="text-sm">Show</label>
        <select className="p-1 border border-gray-300 rounded" value={ticketsPerPage} onChange={handleTicketsPerPageChange}>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={500}>500</option>
        </select>
        <span>{`${(currentPage - 1) * ticketsPerPage + 1}-${currentPage * ticketsPerPage}`} of {totalTickets}</span>
        <button className="p-2 border border-gray-300 rounded" onClick={() => handlePageChange('prev')}>
          <ChevronLeftIcon className="w-3 h-3" />
        </button>
        <span>{currentPage}</span>
        <button className="p-2 border border-gray-300 rounded" onClick={() => handlePageChange('next')}>
          <ChevronRightIcon className="w-3 h-3" />
        </button>
        <select className="p-1 border border-gray-300 rounded">
          <option>Last Conversation</option>
          <option>Due</option>
          <option>Create</option>
          <option>Call Back</option>
          <option>Follow up</option>
          <option>Resolution</option>
        </select>
        <button className="p-2 border border-gray-300 rounded">
          <DotsVerticalIcon className="w-3 h-3" />
        </button>
        <div>
          <button className="p-2 border border-gray-300 rounded">
            <ViewListIcon className="w-3 h-3" />
          </button>
          <button className="p-2 border border-gray-300 rounded">
            <ViewGridIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
