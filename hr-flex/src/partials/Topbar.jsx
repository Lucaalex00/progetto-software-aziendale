import { useState } from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const [isTopbarOpen, setIsTopbarOpen] = useState(true); // State for the topbar menu

  const toggleTopbar = () => setIsTopbarOpen(!isTopbarOpen); // Toggle topbar menu

  return (
    <nav 
      className={`bg-gray-900 w-full text-white fixed top-0 left-0 z-20 md:block hidden transition-all duration-300 ${isTopbarOpen ? 'h-20' : 'h-8'}`}
    >
      <div className="flex justify-around items-center px-4 h-full">
        <h1 className={`text-lg transition-opacity duration-300 ${isTopbarOpen ? 'opacity-100' : 'opacity-0'}`}>
          My App
        </h1>
        <ul className={`flex space-x-4 transition-opacity duration-300 ${isTopbarOpen ? 'opacity-100' : 'opacity-0'}`}>
          <li><Link onClick={toggleTopbar} to="/dashboard" className="text-white">Dashboard</Link></li>
          <li><Link onClick={toggleTopbar} to="/employee-list" className="text-white">Employee List</Link></li>
          <li><Link onClick={toggleTopbar} to="/leave-management" className="text-white">Leave Management</Link></li>
        </ul>
        <button 
          className={`${isTopbarOpen ? 'bg-gray-500' : 'bg-gray-900'} duration-500 absolute ${isTopbarOpen ? 'top-6 text-gray-900' : 'top-10'} right-4 text-2xl rounded-full w-8 h`}
          onClick={toggleTopbar}
        >
          {isTopbarOpen ? '↑' : '↓'}
        </button>
      </div>
    </nav>
  );
};

export default Topbar;
