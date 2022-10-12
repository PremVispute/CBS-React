import DashboardData from '../../../data/DashboardData'
import '../../../styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const Dashboard = () => {
  return (
    <>
    <div className='dashboard'>
      <Container className='head-content'>
        <h6><b>Last Login Time: 2022-10-03 15:30:33.237, Last Login IP: 192.168.1.124</b></h6>
        <h4><b><span style={{color: "#675cb8"}}>Hello Prem,</span> Good Afternoon!</b></h4>
      </Container>
      <Container className='row text-center'>
        {DashboardData.map(DashboardData => (
          <div className='col-md-4 mt-4'>
          <Button className='card-text' variant="outline-secondary" size="lg" href={DashboardData.link}>
            <FontAwesomeIcon className='dash-icon' icon={DashboardData.icon} /><br/>
            {DashboardData.label}
          </Button>
        </div>
        ))}
      </Container>
    </div>
    </>
  )
}

export default Dashboard