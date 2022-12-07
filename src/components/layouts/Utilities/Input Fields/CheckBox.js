import { Form } from 'react-bootstrap'
import { useNode } from "@craftjs/core"

const CheckBox = ({data, disabled}) => {
  const { connectors: {connect, drag} } = useNode()
  return (
    <>
      <div className='col-md-6 row' ref={ref => connect(drag(ref))}>
        <div className='col-md-5 pt-2'>
          <Form.Check
            disabled={disabled}
            type='checkbox'
            label={data.label}
          />
        </div>
        <div className='col-md-1'></div>
      </div>
    </>
  )
}

CheckBox.craft = {
  rules: {
    canDrag: (node) => node.data.props.CheckBox !== "Drag"
  }
}

export default CheckBox