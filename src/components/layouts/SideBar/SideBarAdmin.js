import ListGroup from 'react-bootstrap/ListGroup'
import SideBarAdminData from '../../../data/SideBarAdminData'
import '../../../styles/SideBar.css'

const SideBarAdmin = () => {
  return (
    <>
    <div className='sidebar-secondary'>
        <ListGroup>
            <ListGroup.Item variant='light' className='text-center'>
                Admin
            </ListGroup.Item>
            {SideBarAdminData.map(SideBarAdminData => (
                <ListGroup.Item key={SideBarAdminData.id} variant='light' action href={SideBarAdminData.link}>
                    {SideBarAdminData.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
    </>
  )
}

export default SideBarAdmin