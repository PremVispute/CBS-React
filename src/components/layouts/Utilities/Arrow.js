import Navbar from 'react-bootstrap/Navbar'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Arrow = () => {
  let navigate = useNavigate();
  return (
    <>
        <Navbar.Brand className='ps-3 pb-2'>
            <FontAwesomeIcon 
            className='arrow' 
            onClick={() => navigate(-1)}
            icon={faArrowLeft} />
        </Navbar.Brand>
    </>
  )
}

export default Arrow