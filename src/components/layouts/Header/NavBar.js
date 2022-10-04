import SearchBar from './SearchBar'
import Notifications from './Notifications'
import '../../../styles/Header.css'
import ProfilePic from '../../../assets/images/profile_pic.png'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'

function NavBar() {
  return (
    <Navbar fixed="top" className='navbar' variant="dark" expand="lg">
      <Container fluid>
        <Container className='bank-name'>
          <Navbar.Text className='text-white'>Core Banking System | Turing 4.0</Navbar.Text>
        </Container>
        <Container className='office-name'>
          <Navbar.Text className='text-white'>1001 - Head Office | Working Date: 31 Aug 2022</Navbar.Text>
        </Container>
        <SearchBar />
        <Container className='role-name'>
          <Navbar.Text className='text-white'>Prem</Navbar.Text><br />
          <Navbar.Text className='text-white'>Role: Sr Manager</Navbar.Text>
        </Container>
        <Container className='dropdown-main'>
          <Dropdown align="end">
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
              <img className='dropdown-img' src={ProfilePic} alt="Profile Pic"></img>
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">              
              <Dropdown.Item href="#/action-1" className="dropdown-main">
                Change Password
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="dropdown-main">
                Turing Certificate
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="dropdown-main">
                NPA Certificate
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4" className="dropdown-main">
                Change Photo
              </Dropdown.Item>
              <Dropdown.Item href="#/action-5" className="dropdown-main">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Container>
    </Navbar>
  );
}

export default NavBar;