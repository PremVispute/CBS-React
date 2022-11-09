import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const DropDown = ({data, disabled}) => {
  return (
    <>
    <div key={data.id} className='col-md-5 mt-1'>
        <InputGroup size='sm'>
            <InputGroup.Text className='col-md-4 input'>{data.label}</InputGroup.Text>
            <Form.Select size="sm" id={data.idGiven} className='input pb-0' disabled={disabled}>
                <option value="-1">Select</option>
                {data.options.map(options => (
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