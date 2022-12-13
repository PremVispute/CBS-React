import { Form } from 'react-bootstrap'
import { useNode } from "@craftjs/core"

export const CheckBox = ({data, disabled}) => {
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

export const CheckBoxDefaultProps = {
  data: {
    label: 'example'
  },
  disabled: true
}

CheckBox.craft = {
  props: CheckBoxDefaultProps,
  // rules: {
  //   canDrag: (node) => node.data.props.CheckBox !== "Drag"
  // }
}