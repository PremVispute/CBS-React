import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

const InputCheck = (props) => {
  return (
    <>
    <div key={props.data.id} className='col-md-5 mt-2'>
        <InputGroup size='sm'>
            <InputGroup.Text className='col-md-4'>{props.data.label}</InputGroup.Text>
            <Form.Control
            aria-label={props.data.aria}
            aria-describedby={props.data.aria}
            />
        </InputGroup>                        
    </div>
    <div className='col-md-1 pt-1'>
        <FontAwesomeIcon className='ms-2 me-2 mt-2 tick' icon={faCheck} />
        <FontAwesomeIcon className='ms-2 me-2 mt-2 cross' icon={faXmark} />
    </div>
    </>
  )
}

export default InputCheck