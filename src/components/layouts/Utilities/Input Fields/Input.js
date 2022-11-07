import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const Input = (props) => {
  return (
    <>
    <div key={props.data.id} className='col-md-5 mt-1'>
        <InputGroup size='sm'>
            <InputGroup.Text className='col-md-4 input'>{props.data.label}</InputGroup.Text>
            <Form.Control
            className='input'
            aria-label={props.data.aria}
            aria-describedby={props.data.aria}
            />
        </InputGroup>
    </div>
    <div className='col-md-1'></div>
    </>
  )
}

export default Input