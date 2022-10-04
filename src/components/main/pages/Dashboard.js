import '../../../styles/Dashboard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers, faUsersGear, faAddressCard, faMoneyBill1Wave, faMoneyCheck, 
  faHandHoldingDroplet, faUserCheck, faSquareShareNodes } from '@fortawesome/free-solid-svg-icons'

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
      <Container className='row text-center mt-4'>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faUser} /><br/>
            Customer Creation (Individual)
          </Button>
        </div>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faUsers} /><br/>
            Customer Creation (Non-Individual)
          </Button>
        </div>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faUsersGear} /><br/>
            Customer Maintenance
          </Button>
        </div>
      </Container>
      <Container className='row text-center mt-4'>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faAddressCard} /><br/>
            CASA (Account Creation)
          </Button>
        </div>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faAddressCard} /><br/>
            Account Master TD
          </Button>
        </div>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faAddressCard} /><br/>
            Loan Account Creation
          </Button>
        </div>
      </Container>
      <Container className='row text-center mt-4'>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faMoneyBill1Wave} /><br/>
            Cash
          </Button>
        </div>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faMoneyBill1Wave} /><br/>
            Transfer
          </Button>
        </div>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faMoneyBill1Wave} /><br/>
            Teller
          </Button>
        </div>
      </Container>
      <Container className='row text-center mt-4'>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faMoneyCheck} /><br/>
            Clearing Inward
          </Button>
        </div>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faMoneyCheck} /><br/>
            Clearing Inward Local
          </Button>
        </div>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faMoneyCheck} /><br/>
            Clearing Outward
          </Button>
        </div>
      </Container>
      <Container className='row text-center mt-4'>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faHandHoldingDroplet} /><br/>
            Branch Handover
          </Button>
        </div>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faUserCheck} /><br/>
            Balances
          </Button>
        </div>
        <div className='col-md-4'>
          <Button 
          className='card-text'
          variant="outline-secondary" 
          size="lg">
            <FontAwesomeIcon className='dash-icon' icon={faSquareShareNodes} /><br/>
            Statutory Compliance
          </Button>
        </div>
      </Container>
    </div>
    </>
  )
}

export default Dashboard