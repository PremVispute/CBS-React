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
  const [div, setDiv] = useState("div2")

  const toggleDiv = (id) => {
    let sideBarSecondaryData = SideBarSecondaryData.find(data => { return data.id === id })
    setSideBar(sideBarSecondaryData)
    div === "div1" ? setDiv("div2") : setDiv("div1")
  }

  return (
    <>
    {sidebar && sidebar.id ? <SideBarSecondary data={sidebar} id="div1" className={div === "div1" ? "div1 show" : "div1 hide"}/> : null}   
    <div id="div2" className={div === "div2" ? "div2 show sidebar-main" : "div2 hide sidebar-main"}>
      <ListGroup defaultActiveKey="/">
        {SideBarMainData.map(SideBarMainData => (
          <div key={SideBarMainData.id}>            
          <Link className='link' onClick={() => toggleDiv(SideBarMainData.id)} to={SideBarMainData.link}>
            <ListGroup.Item variant='dark' key={SideBarMainData.id} action href={SideBarMainData.link}>
              <FontAwesomeIcon className='me-3' icon={SideBarMainData.icon} />
              <span className={div === "div1" ? "sidebar-text" : ""}>
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