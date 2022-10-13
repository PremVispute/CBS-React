import ListGroup from 'react-bootstrap/ListGroup'
import SideBarAdmin from './SideBarAdmin'
import SideBarProductMaster from './SideBarProductMaster'
import SideBarMiscellaneous from './SideBarMiscellaneous'
import SideBarAccountMaster from './SideBarAccountMaster'
import SideBarCRM from './SideBarCRM'
import SideBarTransactions from './SideBarTransactions'
import SideBarLoans from './SideBarLoans'
import SideBarRemittance from './SideBarRemittance'
import SideBarTDModule from './SideBarTDModule'
import SideBarLocker from './SideBarLocker'
import SideBarMainData from '../../../data/SideBarMainData'
import '../../../styles/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

  const SideBarMain = () => {
    return (
      <>
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
      <SideBarAdmin />   
      <SideBarProductMaster />
      <SideBarMiscellaneous />
      <SideBarCRM />
      <SideBarAccountMaster />
      <SideBarTransactions />
      <SideBarLoans />
      <SideBarRemittance />
      <SideBarTDModule />
      <SideBarLocker />
    </>
    )
  }

export default SideBarMain