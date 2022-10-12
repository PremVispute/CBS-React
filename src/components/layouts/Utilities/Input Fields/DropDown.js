import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const DropDown = (props) => {
  return (
    <>
    <div key={props.data.id} className='col-md-5 mt-2'>
        <InputGroup size='sm'>
            <InputGroup.Text className='col-md-4'>{props.data.label}</InputGroup.Text>
            <Form.Select size="sm" id={props.data.idGiven}>
                <option value="-1">Select</option>
                {props.data.options.map(options => (
                    <option>{options}</option>
                ))}
            </Form.Select>
        </InputGroup>
    </div>
    <div className='col-md-1'></div>
    </>
  )
}

export default DropDown