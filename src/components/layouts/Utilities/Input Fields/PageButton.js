import { Button } from 'react-bootstrap'
import { useNode } from "@craftjs/core"

const PageButton = ({data}) => {
  const { connectors: {connect, drag} } = useNode()
  return (
    <>
      <div className='page-button text-center' ref={ref => connect(drag(ref))}>
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