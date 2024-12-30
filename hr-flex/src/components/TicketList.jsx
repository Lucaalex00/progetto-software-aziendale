import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeTicket } from '../redux/dashboardSlice';

const TicketList = ({ tickets }) => {
  const dispatch = useDispatch();

  const handleRemoveTicket = (ticketId) => {
    // Passa solo l'ID del ticket al reducer
    dispatch(removeTicket(ticketId)); 
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded overflow-auto max-h-[400px]">
      <h3 className="font-semibold text-lg mb-4">Tickets</h3>
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <div key={ticket.id} className="ticket-item p-2 mb-2 bg-gray-100 rounded flex justify-between items-center">
            <div>
              <h4 className="font-semibold">{ticket.title}</h4>
              <p className="text-sm text-gray-500">{ticket.description}</p>
              <p className="text-xs text-gray-400">{new Date(ticket.createdAt).toLocaleString()}</p>
            </div>
            <button
              onClick={() => handleRemoveTicket(ticket.id)} // Passa solo l'ID
              className="text-red-500 hover:text-red-700"
            >
              X
            </button>
          </div>
        ))
      ) : (
        <p>No tickets available</p>
      )}
    </div>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Aggiungi l'ID del ticket come obbligatorio
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TicketList;
