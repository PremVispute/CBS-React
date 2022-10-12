import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const Date = (props) => {
  return (
    <>
    <div key={props.data.id} className='col-md-5 mt-2'>
        <InputGroup size='sm'>
            <InputGroup.Text className='col-md-4'>{props.data.label}</InputGroup.Text>
            <Form.Control
            type='date'
            aria-label={props.data.aria}
            aria-describedby={props.data.aria}
            />
        </InputGroup>
    </div>
    <div className='col-md-1'></div>
    </>
  )
}

export default Date