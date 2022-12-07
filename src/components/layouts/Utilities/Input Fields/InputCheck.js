import { Col, Container, InputGroup, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNode } from "@craftjs/core"

const InputCheck = ({data, disabled}) => {
  const { connectors: {connect, drag} } = useNode()
  return (
    <>
      <div className='col-md-6 row' ref={ref => connect(drag(ref))}>
        <div className='col-md-10 mt-1 input'>
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
        <Col>
          <FontAwesomeIcon className='ms-2 me-2 mt-1 tick' icon={faCheck} />
          <FontAwesomeIcon className='ms-2 me-2 mt-1 cross' icon={faXmark} />
        </Col>
      </div>
    </>
  )
}

InputCheck.craft = {
  rules: {
    canDrag: (node) => node.data.props.InputCheck !== "Drag"
  }
}

export default InputCheck