// import React, { useState, useEffect } from 'react';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import TicketList from './components/TicketList';
// import TicketForm from './components/TicketForm';
// import './index.css';

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [search, setSearch] = useState('');
//   const [selectAll, setSelectAll] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [ticketsPerPage, setTicketsPerPage] = useState(50);

//   useEffect(() => {
//     const storedTickets = localStorage.getItem('tickets');
//     if (storedTickets) {
//       setTickets(JSON.parse(storedTickets));
//     }
//   }, []);

//   const filteredTickets = tickets.filter(ticket =>
//     ticket.email.toLowerCase().includes(search.toLowerCase()) ||
//     ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
//     ticket.status.toLowerCase().includes(search.toLowerCase()) ||
//     ticket.priority.toLowerCase().includes(search.toLowerCase())
//   );

//   const addTicket = (newTicket) => {
//     newTicket.id = Date.now(); // Ensure each ticket has a unique ID
//     const updatedTickets = [...tickets, newTicket];
//     setTickets(updatedTickets);
//     localStorage.setItem('tickets', JSON.stringify(updatedTickets));
//   };

//   const removeTicket = (ticketId) => {
//     const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId);
//     setTickets(updatedTickets);
//     localStorage.setItem('tickets', JSON.stringify(updatedTickets));
//   };

//   const editTicket = (updatedTicket) => {
//     const updatedTickets = tickets.map(ticket =>
//       ticket.id === updatedTicket.id ? updatedTicket : ticket
//     );
//     setTickets(updatedTickets);
//     localStorage.setItem('tickets', JSON.stringify(updatedTickets));
//   };

//   const handleShowForm = () => {
//     setShowForm(true);
//   };

//   const handleSelectAll = () => {
//     setSelectAll(!selectAll);
//   };

//   const handlePageChange = (direction) => {
//     if (direction === 'prev' && currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     } else if (direction === 'next' && currentPage < Math.ceil(filteredTickets.length / ticketsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleTicketsPerPageChange = (e) => {
//     setTicketsPerPage(Number(e.target.value));
//     setCurrentPage(1);
//   };

//   const paginatedTickets = filteredTickets.slice(
//     (currentPage - 1) * ticketsPerPage,
//     currentPage * ticketsPerPage
//   );

//   return (
//     <div className="flex">
//       <Sidebar
//         onAddTicketClick={handleShowForm}
//         setTickets={setTickets}
//         tickets={tickets}
//       />
//       <div className="flex-1">
//         <Header
//           search={search}
//           setSearch={setSearch}
//           selectAll={selectAll}
//           handleSelectAll={handleSelectAll}
//           ticketsPerPage={ticketsPerPage}
//           handleTicketsPerPageChange={handleTicketsPerPageChange}
//           currentPage={currentPage}
//           handlePageChange={handlePageChange}
//           totalTickets={filteredTickets.length}
//         />
//         <TicketList
//           tickets={paginatedTickets}
//           onRemoveTicket={removeTicket}
//           onEditTicket={editTicket}
//           selectAll={selectAll}
//           setTickets={setTickets}
//         />
//         {showForm && (
//           <TicketForm onSubmit={addTicket} onClose={() => setShowForm(false)} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

// App.jsx

// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TicketList from './components/TicketList';
import TicketForm from './components/TicketForm';
import LoginForm from './components/LoginForm';
import './index.css';
import TicketDetails from './components/TicketDetails';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage, setTicketsPerPage] = useState(50);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedTickets = localStorage.getItem('tickets');
    if (storedTickets) {
      setTickets(JSON.parse(storedTickets));
    }
  }, []);

  const filteredTickets = tickets.filter(ticket =>
    ticket.email.toLowerCase().includes(search.toLowerCase()) ||
    ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
    ticket.status.toLowerCase().includes(search.toLowerCase()) ||
    ticket.priority.toLowerCase().includes(search.toLowerCase())
  );

  const addTicket = (newTicket) => {
    newTicket.id = Date.now(); // Ensure each ticket has a unique ID
    const updatedTickets = [...tickets, newTicket];
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
  };

  const removeTicket = (ticketId) => {
    const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId);
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
  };

  const editTicket = (updatedTicket) => {
    const updatedTickets = tickets.map(ticket =>
      ticket.id === updatedTicket.id ? updatedTicket : ticket
    );
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handlePageChange = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < Math.ceil(filteredTickets.length / ticketsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleTicketsPerPageChange = (e) => {
    setTicketsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const paginatedTickets = filteredTickets.slice(
    (currentPage - 1) * ticketsPerPage,
    currentPage * ticketsPerPage
  );

  const handleLogin = (values, { setSubmitting }) => {
    //authenticate with a hardcoded username and password
    if (values.username === 'admin' && values.password === '123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
    setSubmitting(false);
  };

  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginForm onSubmit={handleLogin} />} />
        <Route path="/" element={isAuthenticated ? (
          <div className="flex">
            <Sidebar
              onAddTicketClick={handleShowForm}
              setTickets={setTickets}
              tickets={tickets}
            />
            <div className="flex-1">
              <Header
                search={search}
                setSearch={setSearch}
                selectAll={selectAll}
                handleSelectAll={handleSelectAll}
                ticketsPerPage={ticketsPerPage}
                handleTicketsPerPageChange={handleTicketsPerPageChange}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                totalTickets={filteredTickets.length}
              />
              <TicketList
                tickets={paginatedTickets}
                onRemoveTicket={removeTicket}
                onEditTicket={editTicket}
                selectAll={selectAll}
                setTickets={setTickets}
              />
              {showForm && (
                <TicketForm onSubmit={addTicket} onClose={() => setShowForm(false)} />
              )}
            </div>
          </div>
        ) : <Navigate to="/login" />} />
        <Route path="tickets/:id" elements={<TicketDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
