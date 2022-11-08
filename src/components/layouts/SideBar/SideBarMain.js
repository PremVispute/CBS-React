import ListGroup from 'react-bootstrap/ListGroup'
import SideBarSecondary from './SideBarSecondary'
import SideBarMainData from '../../../data/SideBarMainData'
import SideBarSecondaryData from '../../../data/SideBarSecondaryData'
import '../../../styles/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SideBarMain = () => {
  const [sidebar, setSideBar] = useState(0)

  const toggleDiv = (id) => {
    let something = SideBarSecondaryData.find(data => { return data.id === id })
    setSideBar(something)
  }

  return (
    <>
    {sidebar && sidebar.id ? <SideBarSecondary data={sidebar}/> : null}   
    <div className='sidebar-main'>
      <ListGroup defaultActiveKey="/">
        {SideBarMainData.map(SideBarMainData => (
          <div key={SideBarMainData.id}>            
          <Link className='link' onClick={() => toggleDiv(SideBarMainData.id)} to={SideBarMainData.link}>
            <ListGroup.Item variant='dark' key={SideBarMainData.id} action href={SideBarMainData.link}>
              <FontAwesomeIcon className='me-3' icon={SideBarMainData.icon} />
              <span className='sidebar-text'>
                {SideBarMainData.label}
              </span>
            </ListGroup.Item>
          </Link>
          </div>
        ))}
      </ListGroup>
    </div>      
    </>
  )
}

export default SideBarMain