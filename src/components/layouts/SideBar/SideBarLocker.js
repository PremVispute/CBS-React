import ListGroup from 'react-bootstrap/ListGroup'
import SideBarLockerData from '../../../data/SideBarLockerData'
import '../../../styles/SideBar.css'

const SideBarLocker = () => {
  return (
    <>
    <div className='sidebar-secondary'>
        <ListGroup>
            <ListGroup.Item variant='light' className='text-center'>
                Locker Module
            </ListGroup.Item>
            {SideBarLockerData.map(SideBarLockerData => (
                <ListGroup.Item key={SideBarLockerData.id} variant='light' action href={SideBarLockerData.link}>
                    {SideBarLockerData.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
    </>
  )
}

export default SideBarLocker