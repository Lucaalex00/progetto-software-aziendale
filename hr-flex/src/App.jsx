import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import DashboardPage from './views/dashboard/DashboardPage';
import EmployeeDetailsPage from './views/employee-details/EmployeeDetailsPage';
import EmployeeManagementPage from './views/employee-management/EmployeeManagementPage';
import LeaveManagementPage from './views/leave-management/LeaveManagementPage';
import HomePage from './views/home/HomePage';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // Stato per il menu laterale

  // Funzione per aprire/chiudere il menu laterale
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen border-gray-500 border">
      {/* Menu laterale: visibile solo su dispositivi piccoli */}
      <div 
        className={`bg-gray-800 w-48 h-screen p-4 fixed top-0 left-0 z-10 md:hidden transition-transform duration-500 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="space-y-4 mt-12 px-2">
          <li><Link onClick={toggleSidebar} to="/dashboard" className="text-white">Dashboard</Link></li>
          <li><Link onClick={toggleSidebar} to="/employee-list" className="text-white">Employee List</Link></li>
          <li><Link onClick={toggleSidebar} to="/leave-management" className="text-white">Leave Management</Link></li>
        </ul>
      </div>

      {/* Contenuto principale */}
      <div className="flex flex-col w-full">
        {/* Navbar orizzontale: visibile da md: in poi */}
        <nav className="bg-gray-900 w-full p-4 text-white flex justify-between items-center fixed top-0 left-0 z-20 md:block hidden">
          <h1 className="ml-4 text-lg">My App</h1>
          <ul className="flex space-x-4">
            <li><Link to="/dashboard" className="text-white">Dashboard</Link></li>
            <li><Link to="/employee-list" className="text-white">Employee List</Link></li>
            <li><Link to="/leave-management" className="text-white">Leave Management</Link></li>
          </ul>
        </nav>

        {/* Pulsante per aprire il menu laterale su dispositivi piccoli */}
        {isSidebarOpen
          ?
          <button 
            className="md:hidden w-8 h-8 bg-gray-800 hover:bg-opacity-90 duration-500 text-red-600 text-xl rounded-full absolute top-4 left-4 z-30"
            onClick={toggleSidebar} 
          >
            X
          </button>
          :
          <button
            className="md:hidden w-8 h-8 bg-gray-800 duration-500 text-green-600 text-xl rounded-full absolute top-4 left-4 z-30"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          }

        {/* Contenuto che cambia in base alla rotta */}
        <div className="pt-24 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/employee-list" element={<EmployeeDetailsPage />} />
            <Route path="/employee-management" element={<EmployeeManagementPage />} />
            <Route path="/leave-management" element={<LeaveManagementPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
