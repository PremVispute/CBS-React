import ListGroup from 'react-bootstrap/ListGroup'
import SideBarMiscData from '../../../data/SideBarMiscData'
import '../../../styles/SideBar.css'

const SideBarMiscellaneous = () => {
  return (
    <>
    <div className='sidebar-secondary'>
        <ListGroup>
            <ListGroup.Item variant='light' className='text-center'>
                Miscellaneous
            </ListGroup.Item>
            {SideBarMiscData.map(SideBarMiscData => (
                <ListGroup.Item key={SideBarMiscData.id} variant='light' action href={SideBarMiscData.link}>
                    {SideBarMiscData.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
    </>
  )
}

export default SideBarMiscellaneous