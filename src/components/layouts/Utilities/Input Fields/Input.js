import { InputGroup, Form } from 'react-bootstrap'
import { useNode } from "@craftjs/core"

export const Input = ({data, disabled}) => {
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

export const InputDefaultProps = {
  data: {
    label: 'example',
    aria: 'example'
  },
  disabled: true
}

Input.craft = {
  props: InputDefaultProps,
  // rules: {
  //   canDrag: (node) => node.data.props.Input !== "Drag"
  // }
}