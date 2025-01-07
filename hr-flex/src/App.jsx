// src/App.js
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Redux Provider
import Sidebar from './partials/Sidebar';
import Topbar from './partials/Topbar';
import DashboardPage from './views/dashboard/DashboardPage';
import EmployeeDetailsPage from './views/employee-details/EmployeeDetailsPage';
import EmployeeManagementPage from './views/employee-management/EmployeeManagementPage';
import LeaveManagementPage from './views/leave-management/LeaveManagementPage';
import HomePage from './views/home/HomePage';
import store from './redux/store'; // Import the Redux store

const App = () => {
  return (
    // Wrap the app with the Provider to give access to Redux store
    <Provider store={store}>
      <div className="flex h-full bg-gray-300">
        {/* Sidebar for small devices */}
        <Sidebar />

        {/* Main content */}
        <div className="flex flex-col w-full">
          {/* Topbar visible on medium devices and up */}
          <Topbar />

          {/* Content based on the current route */}
          <div className={`pt-16 p-4`}>
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
    </Provider>
  );
};

export default App;
