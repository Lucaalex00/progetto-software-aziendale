import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TaskCompletionChart from '../../components/TaskCompletionChart';

const EmployeeDetailsPage = () => {
  const { employees, taskCompletion } = useSelector((state) => state.dashboard);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChartFullScreen, setIsChartFullScreen] = useState(false);

  // Filtro dei dipendenti
  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterRole ? employee.role.toLowerCase() === filterRole.toLowerCase() : true)
    );
  });

  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleClearSelection = () => {
    setSelectedEmployee(null);
  };

  // Dati filtrati per il grafico
  const selectedEmployeeDataset = selectedEmployee
    ? {
        labels: taskCompletion.labels, // Usa le etichette globali
        datasets: taskCompletion.datasets.filter(
          (dataset) => dataset.id === selectedEmployee.id // Filtra per ID del dipendente
        ),
      }
    : null;

  // Funzione per espandere il grafico
  const handleToggleFullScreen = () => {
    setIsChartFullScreen(!isChartFullScreen);
  };

  // Funzione per chiudere il grafico a schermo intero se clicchi fuori
  const handleOutsideClick = (e) => {
    if (e.target.closest('.chart-offcanvas')) return;
    setIsChartFullScreen(false);
  };

  // Effetto per gestire il click fuori
  useEffect(() => {
    if (isChartFullScreen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isChartFullScreen]);

  // Funzione per resettare i filtri
  const handleClearFilters = () => {
    setSearchTerm('');
    setFilterRole('');
  };

  return (
    <div className="container mx-auto p-4 mt-8 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Employee List</h2>

      {/* Barra di ricerca e selettore del ruolo */}
      <div className="flex gap-4 mb-4 ">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Bottone per aprire/chiudere il dropdown */}
        <div className="relative w-1/4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 border w-full border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {filterRole || 'Roles'}
          </button>

          {/* Dropdown con le opzioni */}
          <div
            className={`absolute right-0 w-full py-6 bg-white opacity-80 shadow-lg rounded-md z-10 transition-all duration-200 ease-in-out ${
              isDropdownOpen ? 'absolute' : 'hidden pointer-events-none'
            }`}
          >
            <button
              onClick={() => { handleClearFilters(); setIsDropdownOpen(false); }}
              className="w-4 absolute right-0 top-0 px-1 text-red-500 focus:outline-none"
            >
              x
            </button>

            {[...new Set(employees.map((e) => e.role))].map((role) => (
              <button
                key={role}
                onClick={() => {
                  setFilterRole(role);
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left p-2 hover:bg-gray-500 duration-300 focus:outline-none"
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Elenco dei dipendenti */}
      <ul className="bg-white shadow-md rounded divide-y divide-gray-200">
        {filteredEmployees.map((employee) => (
          <li
            key={employee.id}
            onClick={() => handleSelectEmployee(employee)}
            className="p-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
          >
            <span className="font-medium">{employee.name}</span>
            <span className="text-sm text-gray-500">{employee.role}</span>
          </li>
        ))}
      </ul>

      {/* Dettagli del dipendente selezionato */}
      {selectedEmployee && (
        <div className="mt-6 bg-white flex relative flex-col items-center shadow-md rounded p-4">
          <button
            onClick={handleClearSelection}
            className="text-gray-400 absolute top-3 right-3 hover:text-gray-600"
          >
            X
          </button>
          <h3 className="text-xl font-semibold">{selectedEmployee.name}</h3>
          <p>
            <strong>Role:</strong> {selectedEmployee.role}
          </p>

          {/* Grafico di completamento attività */}
          {selectedEmployeeDataset && (
            <div className="mt-8 text-center">
              <h4 className="text-lg font-semibold">Performance</h4>
              <div
                className={`chart-offcanvas ${isChartFullScreen ? 'fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center ' : ''}`}
                onClick={handleToggleFullScreen}
              >
                <TaskCompletionChart taskCompletion={selectedEmployeeDataset} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmployeeDetailsPage;
