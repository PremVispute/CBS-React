import { Button } from "react-bootstrap"
import { useNode } from "@craftjs/core"

const PageButton = ({data}) => {
  // const { connectors: {connect, drag} } = useNode();    //ref={ref => connect(drag(ref))}
  return (
    <>
      <div className='page-button text-center' >
        <Button variant="primary" size='sm' className='m-2 page-buttons'>{data.label}</Button>
      </div>
    </>
  )
}

PageButton.craft = {
  rules: {
    canDrag: (node) => node.data.props.PageButton !== "Drag"
  }
}

export default PageButton