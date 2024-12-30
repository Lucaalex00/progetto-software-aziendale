// DashboardPage.js
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTicket } from '../../redux/dashboardSlice';
import TaskCompletionChart from '../../components/TaskCompletionChart';
import EmployeeList from '../../components/EmployeeList';
import AssignedTasks from '../../components/AssignedTasks';
import TicketForm from '../../components/TicketForm';
import TicketList from '../../components/TicketList';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { employees, taskCompletion, assignedTasks, tickets } = useSelector((state) => state.dashboard);

  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      id: Date.now(), // Genera un ID unico basato sul timestamp
      title: ticketTitle,
      description: ticketDescription,
      createdAt: new Date().toISOString(),
    };
    dispatch(addTicket(newTicket));
    setTicketTitle('');
    setTicketDescription('');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center sm:justify-between gap-4">
        <Link to="/employee-list"><EmployeeList employees={employees} /></Link>
        
        <TaskCompletionChart taskCompletion={taskCompletion} />
        <AssignedTasks assignedTasks={assignedTasks} />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <TicketForm
          ticketTitle={ticketTitle}
          setTicketTitle={setTicketTitle}
          ticketDescription={ticketDescription}
          setTicketDescription={setTicketDescription}
          handleTicketSubmit={handleTicketSubmit}
        />
        <TicketList tickets={tickets} />
      </div>
    </div>
  );
};

export default DashboardPage;
