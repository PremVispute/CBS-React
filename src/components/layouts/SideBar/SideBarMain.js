import ListGroup from 'react-bootstrap/ListGroup'
import SideBarSecondary from './SideBarSecondary'
import SideBarMainData from '../../../data/SideBarMainData'
import SideBarSecondaryData from '../../../data/SideBarSecondaryData'
import '../../../styles/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const SideBarMain = () => {
  const [sidebar, setSideBar] = useState(null)
  const sidebarRef = useRef(0)
  
  useEffect(() => {
    console.log("useEffect: "+sidebar)
  }, [sidebar])

  const toggleDiv = (id) => {
    console.log("id: "+id)
    console.log("sidebarRef: "+JSON.stringify(sidebarRef.current))
    SideBarSecondaryData.map(data => (
      data.id === id ? setSideBar(sidebarRef.current) : <></>
    ))
    console.log("sidebar-state: "+JSON.stringify(sidebar))
  }

  return (
    <>      
    {/* <SideBarSecondary data={sidebar}/> */}
    <div className='sidebar-main'>
      <ListGroup defaultActiveKey="/">
        {SideBarMainData.map(SideBarMainData => (
          <>            
          <Link key={SideBarMainData.id} className='link' onClick={() => toggleDiv(SideBarMainData.id)} to={SideBarMainData.link}>
            <ListGroup.Item variant='dark' key={SideBarMainData.id} action href={SideBarMainData.link}>
              <FontAwesomeIcon className='me-3' icon={SideBarMainData.icon} />
              <span className='sidebar-text'>
                {SideBarMainData.label}
              </span>
            </ListGroup.Item>
          </Link>
          </>
        ))}
      </ListGroup>
    </div>      
    </>
  )
}

export default SideBarMain