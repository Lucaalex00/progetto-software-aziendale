import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Topbar = () => {
  const [isTopbarOpen, setIsTopbarOpen] = useState(true); // State for the topbar menu
  const location = useLocation(); // Get the current location (route)

  const toggleTopbar = () => setIsTopbarOpen(!isTopbarOpen); // Toggle topbar menu

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path ? 'text-blue-400' : 'text-white';

  return (
    <nav 
      className={`bg-gray-800 bg-opacity-95 w-full text-white fixed top-0 left-0 z-20 md:block hidden transition-all duration-300 ${isTopbarOpen ? 'h-20' : 'h-8'}`}
    >
      <div className={`flex justify-between items-center px-10 h-full transition-all duration-200 ${isTopbarOpen ? 'opacity-100' : 'opacity-0'} ${isTopbarOpen ? 'translate-y-0' : 'translate-y-[-5rem]'}`}>
            <h1 className={`text-lg transition-opacity duration-300 ${isTopbarOpen ? 'opacity-100' : 'opacity-0'}`}>
            My App
          </h1>
        {isTopbarOpen && (
          <div className="flex justify-around items-center px-4 h-full">
            <ul className={`flex space-x-4 transition-all duration-300 ${isTopbarOpen ? 'opacity-100' : 'opacity-0'} ${isTopbarOpen ? '' : 'translate-x-full'}`}>
              <li><Link onClick={toggleTopbar} to="/dashboard" className={`${isActive('/dashboard')}`}>Dashboard</Link></li>
              <li><Link onClick={toggleTopbar} to="/employee-list" className={`${isActive('/employee-list')}`}>Employee List</Link></li>
              <li><Link onClick={toggleTopbar} to="/leave-management" className={`${isActive('/leave-management')}`}>Leave Management</Link></li>
            </ul>
          </div>
        )}
      </div>
      <button 
        className={`bg-gray-800 shadow-sm shadow-black duration-500 absolute ${isTopbarOpen ? 'top-6 text-red-500' : 'top-10 text-green-500'} right-4 text-2xl rounded-full w-8 h`}
        onClick={toggleTopbar}
      >
        {isTopbarOpen ? '↑' : '↓'}
      </button>
    </nav>
  );
};

export default Topbar;
