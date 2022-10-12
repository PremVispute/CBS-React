import ListGroup from 'react-bootstrap/ListGroup'
import SideBarProductData from '../../../data/SideBarProductData'
import '../../../styles/SideBar.css'

const SideBarProductMaster = () => {
  return (
    <>
    <div className='sidebar-secondary'>
        <ListGroup>
            <ListGroup.Item variant='light' className='text-center'>
                Product Master
            </ListGroup.Item>
            {SideBarProductData.map(SideBarProductData => (
                <ListGroup.Item key={SideBarProductData.id} variant='light' action href={SideBarProductData.link}>
                    {SideBarProductData.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
    </>
  )
}

export default SideBarProductMaster