import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'
import NotificationsData from '../../../data/NotificationsData'

const Notifications = () => {
  return (
    <>
      <Dropdown align="end">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          <FontAwesomeIcon className='ps-1 main-icon' icon={faBell} />
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          {NotificationsData.map(NotificationsData => (
            <div key={NotificationsData.id}>
              <div className='row'>
                <div className='col-md-8'>
                  <Dropdown.ItemText className="notifications">
                    <b>{NotificationsData.heading1}</b>
                  </Dropdown.ItemText>
                </div>
                <div className='col-md-4'>
                  <Dropdown.ItemText className="notifications">
                    <b>{NotificationsData.heading2}</b> 
                  </Dropdown.ItemText>
                </div>
              </div>
              {NotificationsData.fields.map(fields => (
                <div key={fields.id} className='row'>
                  <div className='col-md-8'>
                    <Dropdown.Item href="#" className="notifications">
                      {fields.label}
                    </Dropdown.Item>
                  </div>
                  <div className='col-md-4'>
                    <Dropdown.ItemText className="notifications">
                      {fields.count}
                    </Dropdown.ItemText>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Notifications