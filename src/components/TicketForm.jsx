import React, { useState } from 'react';

const TicketForm = ({ onSubmit, onClose, initialValues }) => {
  const [ticket, setTicket] = useState(
    initialValues || { email: '',channal:'', subject: '', description: '', status: 'OPN', priority: 'L', date: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket((prevTicket) => ({ ...prevTicket, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0]; // Generate current date in YYYY-MM-DD format
    onSubmit({ ...ticket, date: currentDate });
    setTicket({ email: '', channal: '', subject: '', description: '', status: 'OPN', priority: 'L', date: '' });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white w-1/3 p-4 rounded shadow-md">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block">Email</label>
            <input type="email" name="email" value={ticket.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block">Subject</label>
            <input type="text" name="subject" value={ticket.subject} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block">Description</label>
            <textarea name="description" value={ticket.description} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block">Status</label>
            <select name="status" value={ticket.status} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded">
              <option value="OPN">Open</option>
              <option value="PEN">Pending</option>
              <option value="RES">Resolved</option>
            </select>
          </div>
          <div>
            <label className="block">Priority</label>
            <select name="priority" value={ticket.priority} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded">
              <option value="L">Low</option>
              <option value="M">Medium</option>
              <option value="H">High</option>
            </select>
          </div>
          <div>
            <label className="block">Channal</label>
            <select name="channal" value={ticket.channal} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded">
              <option value="MAIL">MAIL</option>
              <option value="CHAT">CHAT</option>
              <option value="CALL">CALL</option>
            </select>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
            <button type="button" onClick={onClose} className="bg-red-500 text-white p-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
