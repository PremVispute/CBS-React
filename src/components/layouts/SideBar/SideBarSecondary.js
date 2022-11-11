import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import '../../../styles/SideBar.css'

const SideBarSecondary = (props) => {
  return (
    <>
    <div key={props.data.id} className='sidebar-secondary'>
        <ListGroup>
            <ListGroup.Item variant='light' className='text-center'>
                {props.data.heading}
            </ListGroup.Item>
            {props.data.fields.map(fields => (
                <Link className='link' to={`/NavBarSecondary/${fields.label}`}>
                    <ListGroup.Item key={fields.id} variant='light' action>
                        {fields.label}
                    </ListGroup.Item>
                </Link>
            ))}
        </ListGroup>
    </div>
    </>
  )
}

export default SideBarSecondary