import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const Input = ({data, disabled}) => {
  return (
    <>
    <div key={data.id} className='col-md-5 mt-1'>
        <InputGroup size='sm'>
            <InputGroup.Text className='col-md-4 input'>{data.label}</InputGroup.Text>
            <Form.Control
            disabled={disabled}
            className='input'
            aria-label={data.aria}
            aria-describedby={data.aria}
            />
        </InputGroup>
    </div>
    <div className='col-md-1'></div>
    </>
  )
}

export default Input