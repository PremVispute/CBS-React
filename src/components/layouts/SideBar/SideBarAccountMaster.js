import ListGroup from 'react-bootstrap/ListGroup'
import SideBarAccountData from '../../../data/SideBarAccountData'
import '../../../styles/SideBar.css'

const SideBarAccountMaster = () => {
  return (
    <>
    <div className='sidebar-secondary'>
        <ListGroup>
            <ListGroup.Item variant='light' className='text-center'>
                Account Master
            </ListGroup.Item>
            {SideBarAccountData.map(SideBarAccountData => (
                <ListGroup.Item key={SideBarAccountData.id} variant='light' action href={SideBarAccountData.link}>
                 {SideBarAccountData.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
    </>
  )
}

export default SideBarAccountMaster