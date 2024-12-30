import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for the sidebar menu

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar menu

  return (
    <>
      {/* Sidebar menu */}
      <div 
        className={`bg-gray-800 w-48 h-screen p-4 fixed top-0 left-0 z-10 md:hidden transition-transform duration-500 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="space-y-4 mt-12 px-2">
          <li><Link onClick={toggleSidebar} to="/dashboard" className="text-white">Dashboard</Link></li>
          <li><Link onClick={toggleSidebar} to="/employee-list" className="text-white">Employee List</Link></li>
          <li><Link onClick={toggleSidebar} to="/leave-management" className="text-white">Leave Management</Link></li>
        </ul>
      </div>

      {/* Button to toggle sidebar on small devices */}
      {isSidebarOpen
        ? <button 
            className="md:hidden w-8 h-8 bg-gray-800 hover:bg-opacity-90 duration-500 text-red-600 text-xl rounded-full absolute top-4 left-4 z-30"
            onClick={toggleSidebar} 
          >
            X
          </button>
        : <button
            className="md:hidden w-8 h-8 bg-gray-800 duration-500 text-green-600 text-xl rounded-full absolute top-4 left-4 z-30"
            onClick={toggleSidebar}
          >
            ☰
          </button>
      }
    </>
  );
};

export default Sidebar;
