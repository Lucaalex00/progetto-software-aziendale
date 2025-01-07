import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TaskCompletionChart = ({ taskCompletion }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Task Completion' },
    },
  };

  return (
    <div className="flex justify-center items-center min-w-[250px] sm:w-2/4 max-h-[400px] md:w-3/5 w-full aspect-square p-4 bg-white shadow-lg rounded overflow-hidden">
      <Line options={options} data={taskCompletion} />
    </div>
  );
};

TaskCompletionChart.propTypes = {
  taskCompletion: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
        borderColor: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        fill: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default TaskCompletionChart;
