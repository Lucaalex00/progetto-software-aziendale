import { Route, Routes } from 'react-router-dom';
import Sidebar from './partials/Sidebar';
import Topbar from './partials/Topbar';
import DashboardPage from './views/dashboard/DashboardPage';
import EmployeeDetailsPage from './views/employee-details/EmployeeDetailsPage';
import EmployeeManagementPage from './views/employee-management/EmployeeManagementPage';
import LeaveManagementPage from './views/leave-management/LeaveManagementPage';
import HomePage from './views/home/HomePage';

const App = () => {
  return (
    <div className="flex h-screen border-gray-500 border">
      {/* Sidebar for small devices */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col w-full">
        {/* Topbar visible on medium devices and up */}
        <Topbar />

        {/* Route-based content */}
        <div className={`pt-24 p-4`}>
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
};

export default App;
