import ListGroup from 'react-bootstrap/ListGroup'
import SideBarTDData from '../../../data/SideBarTDData'
import '../../../styles/SideBar.css'

const SideBarTDModule = () => {
  return (
    <>
    <div className='sidebar-secondary'>
        <ListGroup>
            <ListGroup.Item variant='light' className='text-center'>
                TD Module
            </ListGroup.Item>
            {SideBarTDData.map(SideBarTDData => (
                <ListGroup.Item key={SideBarTDData.id} variant='light' action href={SideBarTDData.link}>
                    {SideBarTDData.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
    </>
  )
}

export default SideBarTDModule