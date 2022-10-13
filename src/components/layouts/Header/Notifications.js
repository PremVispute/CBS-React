import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'

const Notifications = () => {
  return (
    <>
      <Dropdown align="end">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          <FontAwesomeIcon className='ps-1 main-icon' icon={faBell} />
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <div className='row'>
            <div className='col-md-9'>
              <Dropdown.ItemText className="notifications">
                <b>CRM</b>
              </Dropdown.ItemText>
            </div>
            <div className='col-md-3'>
              <Dropdown.ItemText className="notifications">
                <b>Count</b> 
              </Dropdown.ItemText>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-9'>
              <Dropdown.Item href="#" className="notifications">
                Customer Creation: Individual
              </Dropdown.Item>
            </div>
            <div className='col-md-3'>
              <Dropdown.ItemText className="notifications">
                0
              </Dropdown.ItemText>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Notifications