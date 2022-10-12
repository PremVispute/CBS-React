import ListGroup from 'react-bootstrap/ListGroup'
import SideBarCRMData from '../../../data/SideBarCRMData'
import '../../../styles/SideBar.css'

const SideBarCRM = () => {
  return (
    <>
    <div className='sidebar-secondary'>
        <ListGroup>
            <ListGroup.Item variant='light' className='text-center'>
                CRM
            </ListGroup.Item>
            {SideBarCRMData.map(SideBarCRMData => (
                <ListGroup.Item key={SideBarCRMData.id} variant='light' action href={SideBarCRMData.link}>
                    {SideBarCRMData.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
    </>
  )
}

export default SideBarCRM