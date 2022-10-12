import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Arrow = () => {
    const style = {
        transform: 'rotate(0deg)', 
        transition: 'transform 150ms ease',
    }

  return (
    <>
        <Navbar.Brand className='ps-3 pb-2'>
            <FontAwesomeIcon 
            className='arrow' 
            style={style} 
            // onClick={} 
            icon={faArrowLeft} />
        </Navbar.Brand>
    </>
  )
}

export default Arrow