import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <h3>WELCOME</h3>
        <Link to="/dashboard">dashboard</Link>
    </div>
  )
}

export default HomePage