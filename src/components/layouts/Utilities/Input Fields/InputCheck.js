import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNode } from "@craftjs/core"

const InputCheck = ({data, disabled}) => {
  // const { connectors: {connect, drag} } = useNode();
  return (
    <>
      {/* <div key={data.id} ref={ref => connect(drag(ref))}> */}
        <div className='col-md-5 mt-1 input'>
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
        <div className='col-md-1 pt-1'>
          <FontAwesomeIcon className='ms-2 me-2 mt-1 tick' icon={faCheck} />
          <FontAwesomeIcon className='ms-2 me-2 mt-1 cross' icon={faXmark} />
        </div>
      {/* </div> */}
    </>
  )
}

InputCheck.craft = {
  rules: {
    canDrag: (node) => node.data.props.InputCheck !== "Drag"
  }
}

export default InputCheck