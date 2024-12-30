import PropTypes from 'prop-types';

const EmployeeList = ({ employees }) => {
  return (
    <div className="flex-1 min-w-[250px] h-full bg-white p-4 shadow-lg rounded overflow-auto max-h-[400px]">
      <h3 className="font-semibold text-lg mb-4">Employees</h3>
      {employees.length > 0 ? (
        employees.map((employee) => (
          <div key={employee.id} className="employee-item p-2 bg-gray-100 rounded mb-2">
            <p className="font-semibold">{employee.name}</p>
            <p className="text-sm text-gray-500">{employee.role}</p>
          </div>
        ))
      ) : (
        <p>No employees available</p>
      )}
    </div>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EmployeeList;
