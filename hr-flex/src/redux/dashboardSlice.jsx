import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Manager' },
    { id: 3, name: 'Robert Brown', role: 'Designer' },
    { id: 4, name: 'Robert Saul', role: 'Designer' },
    { id: 5, name: 'Mark Freens', role: 'Developer' },
  ],
  taskCompletion: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'John D.',
        data: [10, 15, 30, 50, 45, 30, 20, 50, 30, 20, 10, 20],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Jane S.',
        data: [5, 25, 20, 40, 60, 40, 24, 10, 30, 15, 23, 20],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
      {
        label: 'Robert B.',
        data: [51, 5, 30, 40, 50, 40, 14, 10, 42, 55, 28, 20],
        borderColor: 'rgba(280, 20, 25, 1)',
        backgroundColor: 'rgba(280, 20, 25, 0.2)',
        fill: true,
      },
    ],
  },
  assignedTasks: [
    {
      id: 1,
      taskName: 'Review Leave Requests',
      assignedTo: 'John Doe',
      status: 'In Progress',
      color: 'bg-blue-100',
    },
    {
      id: 2,
      taskName: 'Update Payroll',
      assignedTo: 'Jane Smith',
      status: 'Completed',
      color: 'bg-purple-100',
    },
    {
      id: 3,
      taskName: 'Design New Logo',
      assignedTo: 'Robert Brown',
      status: 'Pending',
      color: 'bg-green-100',
    },
    {
      id: 3,
      taskName: 'Make a Logo',
      assignedTo: 'Robert Saul',
      status: 'Pending',
      color: 'bg-green-100',
    },
    {
      id: 3,
      taskName: 'Make a Logo',
      assignedTo: 'Robert Saul',
      status: 'Pending',
      color: 'bg-green-100',
    },{
      id: 3,
      taskName: 'Make a Logo',
      assignedTo: 'Robert Saul',
      status: 'Pending',
      color: 'bg-green-100',
    },{
      id: 3,
      taskName: 'Make a Logo',
      assignedTo: 'Robert Saul',
      status: 'Pending',
      color: 'bg-green-100',
    },
  ],
  tickets: [], // Array di ticket vuoto inizialmente
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addTicket: (state, action) => {
      state.tickets.push(action.payload);
    },
    removeTicket: (state, action) => {
      // Aggiorna i ticket, rimuovendo quello con l'id che corrisponde a action.payload
      state.tickets = state.tickets.filter(ticket => ticket.id !== action.payload);
    }
  },
});

export const { addTicket, removeTicket } = dashboardSlice.actions;
export default dashboardSlice.reducer;
