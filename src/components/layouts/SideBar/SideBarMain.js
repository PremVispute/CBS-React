import ListGroup from 'react-bootstrap/ListGroup'
import Dashboard from '../../main/pages/Dashboard'
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
import CustomerInformation from '../../main/pages/CustomerInformation'

  const SideBarMain = () => {
    return (
      <>
      <div className='sidebar-main'>
        <ListGroup defaultActiveKey="#link1">
          {SideBarMainData.map(SideBarMainData => (
            <ListGroup.Item key={SideBarMainData.id} variant='dark' action href={SideBarMainData.link}>
              <FontAwesomeIcon className='me-3' icon={SideBarMainData.icon} />
                <span className='sidebar-text'>
                  {SideBarMainData.label}
                </span>
          </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      {/* <Dashboard /> */}
      <CustomerInformation />
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