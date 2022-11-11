import { Button } from "react-bootstrap"

const PageButton = ({data}) => {
  return (
    <>
      <div className='page-button text-center'>
          <Button variant="primary" size='sm' className='m-2 page-buttons'>{data.label}</Button>
      </div>
    </>
  )
}

export default PageButton

//<div className='text-center mt-3 mb-3'>