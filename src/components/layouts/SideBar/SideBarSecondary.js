import ListGroup from 'react-bootstrap/ListGroup'
import SideBarSecondaryData from '../../../data/SideBarSecondaryData'
import '../../../styles/SideBar.css'

const SideBarSecondary = () => {
  return (
    <>
    {SideBarSecondaryData.map(SideBarSecondaryData => (
        <div key={SideBarSecondaryData.id} className='sidebar-secondary'>
            <ListGroup>
                <ListGroup.Item variant='light' className='text-center'>
                    {SideBarSecondaryData.heading}
                </ListGroup.Item>
                {SideBarSecondaryData.fields.map(fields => (
                    <ListGroup.Item key={fields.id} variant='light' action href={fields.link}>
                        {fields.label}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    ))}
    </>
  )
}

export default SideBarSecondary