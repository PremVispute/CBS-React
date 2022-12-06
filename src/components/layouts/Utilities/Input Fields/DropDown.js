import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useNode } from "@craftjs/core"

const DropDown = ({data, disabled}) => {
  // const { connectors: {connect, drag} } = useNode();
  return (
    <>
      {/* <div key={data.id} ref={ref => connect(drag(ref))}> */}
        <div className='col-md-5 mt-1'>
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
      {/* </div> */}
    </>
  )
}

DropDown.craft = {
  rules: {
    canDrag: (node) => node.data.props.DropDown !== "Drag"
  }
}

export default DropDown