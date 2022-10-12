import ListGroup from 'react-bootstrap/ListGroup'
import SideBarRemitData from '../../../data/SideBarRemitData'
import '../../../styles/SideBar.css'

const SideBarRemittance = () => {
  return (
    <>
    <div className='sidebar-secondary'>
        <ListGroup>
            <ListGroup.Item variant='light' className='text-center'>
                Remittance
            </ListGroup.Item>
            {SideBarRemitData.map(SideBarRemitData => (
                <ListGroup.Item key={SideBarRemitData.id} variant='light' action href={SideBarRemitData.link}>
                    {SideBarRemitData.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
    </>
  )
}

export default SideBarRemittance