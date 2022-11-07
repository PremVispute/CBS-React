import ListGroup from 'react-bootstrap/ListGroup'
import '../../../styles/SideBar.css'

const SideBarSecondary = (props) => {
  return (
    <>
    <div key={props.data.id} className='sidebar-secondary'>
        <ListGroup>
            <ListGroup.Item variant='light' className='text-center'>
                {props.data.heading}
            </ListGroup.Item>
            { props.data.fields.map(fields => (
                <ListGroup.Item key={fields.id} variant='light' action href={fields.link}>
                    {fields.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
    </>
  )
}

export default SideBarSecondary