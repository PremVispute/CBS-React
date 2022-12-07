import { InputGroup, Form } from 'react-bootstrap'
import { useNode } from "@craftjs/core"

const Date = ({data, disabled}) => {
  const { connectors: {connect, drag} } = useNode()
  return (
    <>
      <div className='col-md-6 row' ref={ref => connect(drag(ref))}>
        <div className='col-md-10 mt-1'>
          <InputGroup size='sm'>
            <InputGroup.Text className='col-md-4 input'>{data.label}</InputGroup.Text>
            <Form.Control
            disabled={disabled}
            className='input'
            type='date'
            aria-label={data.aria}
            aria-describedby={data.aria}
            />
          </InputGroup>
        </div>
        <div className='col-md-1'></div>
      </div>
    </>
  )
}

Date.craft = {
  rules: {
    canDrag: (node) => node.data.props.Date !== "Drag"
  }
}

export default Date