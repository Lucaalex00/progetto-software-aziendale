import PropTypes from 'prop-types';

const AssignedTasks = ({ assignedTasks }) => {
  return (
    <div className="flex-1 min-w-[250px] h-full bg-white p-4 shadow-lg overflow-auto max-h-[400px] rounded">
      <h3 className="font-semibold text-lg mb-4">Assigned Tasks</h3>
      {assignedTasks.length > 0 ? (
        assignedTasks.map((task) => (
          <div key={task.id} className={`p-2 mb-2 rounded ${task.color}`}>
            <h4 className="font-semibold">{task.taskName}</h4>
            <p className="text-sm text-gray-500">Assigned to: {task.assignedTo}</p>
            <p className="text-sm text-gray-500">Status: {task.status}</p>
          </div>
        ))
      ) : (
        <p>No tasks assigned</p>
      )}
    </div>
  );
};

AssignedTasks.propTypes = {
  assignedTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      taskName: PropTypes.string.isRequired,
      assignedTo: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AssignedTasks;
