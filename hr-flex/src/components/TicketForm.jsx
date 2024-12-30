import PropTypes from 'prop-types';

const TicketForm = ({
  ticketTitle,
  setTicketTitle,
  ticketDescription,
  setTicketDescription,
  handleTicketSubmit,
}) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded">
      <h3 className="font-semibold text-lg mb-4">Open a Ticket</h3>
      <form onSubmit={handleTicketSubmit}>
        <input
          required
          type="text"
          value={ticketTitle}
          onChange={(e) => setTicketTitle(e.target.value)}
          placeholder="Ticket Title"
          className="w-full mb-2 p-2 border rounded"
        />
        <textarea
          required
          value={ticketDescription}
          onChange={(e) => setTicketDescription(e.target.value)}
          placeholder="Ticket Description"
          className="w-full mb-2 p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

TicketForm.propTypes = {
  ticketTitle: PropTypes.string.isRequired,
  setTicketTitle: PropTypes.func.isRequired,
  ticketDescription: PropTypes.string.isRequired,
  setTicketDescription: PropTypes.func.isRequired,
  handleTicketSubmit: PropTypes.func.isRequired,
};

export default TicketForm;
