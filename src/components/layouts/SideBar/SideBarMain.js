import ListGroup from 'react-bootstrap/ListGroup'
import Dashboard from '../../main/pages/Dashboard'
import '../../../styles/SideBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh, faUserLock, faFolderTree, faArrowRightFromBracket, faUsersRectangle, faFileInvoice, 
  faDesktop, faMoneyBillTransfer, faHandHoldingDollar, faMoneyCheckDollar,
  faMoneyBillTrendUp, faDoorClosed } from '@fortawesome/free-solid-svg-icons'

  const SideBarMain = () => {
    return (
      <>
      <div className='sidebar-main'>
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item variant='dark' action href="#link1">
            <FontAwesomeIcon className='me-3' icon={faGaugeHigh} />
            Dashboard
          </ListGroup.Item>
          <ListGroup.Item variant='dark' action href="#link2">
            <FontAwesomeIcon className='me-3' icon={faUserLock} />
            Admin
          </ListGroup.Item>
          <ListGroup.Item variant='dark' action href="#link3">
            <FontAwesomeIcon className='me-3' icon={faFolderTree} />
            Product Master
          </ListGroup.Item>
          <ListGroup.Item variant='dark' action href="#link4">
            <FontAwesomeIcon className='me-3' icon={faArrowRightFromBracket} />
            Miscellaneous
          </ListGroup.Item>
          <ListGroup.Item variant='dark' action href="#link5">
            <FontAwesomeIcon className='me-3' icon={faUsersRectangle} />
            CRM
          </ListGroup.Item>
          <ListGroup.Item variant='dark' action href="#link6">
            <FontAwesomeIcon className='me-4' icon={faFileInvoice} />
            Account Master
          </ListGroup.Item>
          <ListGroup.Item variant='dark' action href="#link7">
            <FontAwesomeIcon className='me-3' icon={faMoneyBillTransfer} />
            Transactions
          </ListGroup.Item>
          <ListGroup.Item variant='dark' action href="#link8">
            <FontAwesomeIcon className='me-3' icon={faHandHoldingDollar} />
            Loans and Advances
          </ListGroup.Item>
          <ListGroup.Item variant='dark' action href="#link9">
            <FontAwesomeIcon className='me-3' icon={faMoneyCheckDollar} />
            Remittance
          </ListGroup.Item>
          <ListGroup.Item variant='dark' action href="#link10">
            <FontAwesomeIcon className='me-3' icon={faMoneyBillTrendUp} />
            TD Module
          </ListGroup.Item>
          <ListGroup.Item variant='dark' action href="#link11">
            <FontAwesomeIcon className='me-3' icon={faDoorClosed} />
            Locker Module
          </ListGroup.Item>
          <ListGroup.Item variant='dark' action href="#link12">
            <FontAwesomeIcon className='me-3' icon={faDesktop} />
            Integrated Channels
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Dashboard />
    </>
    )
  }

export default SideBarMain