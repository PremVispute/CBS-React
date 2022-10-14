import ListGroup from 'react-bootstrap/ListGroup'
import SideBarSecondary from './SideBarSecondary'
import SideBarMainData from '../../../data/SideBarMainData'
import '../../../styles/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

  const SideBarMain = () => {
    return (
      <>
      <SideBarSecondary />
      <div className='sidebar-main'>
        <ListGroup defaultActiveKey="/">
          {SideBarMainData.map(SideBarMainData => (
            <Link key={SideBarMainData.id} className='link' to={SideBarMainData.link}>
              <ListGroup.Item variant='dark' key={SideBarMainData.id} action href={SideBarMainData.link}>
                <FontAwesomeIcon className='me-3' icon={SideBarMainData.icon} />
                <span className='sidebar-text'>
                  {SideBarMainData.label}
                </span>
              </ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      </div>      
      </>
    )
  }

export default SideBarMain