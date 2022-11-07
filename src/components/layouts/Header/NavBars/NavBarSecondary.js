import Arrow from '../../Utilities/Arrow'
import Navbar from 'react-bootstrap/Navbar'
import '../../../../styles/Header.css'
import { useParams } from 'react-router-dom'

const NavBarSecondary = (props) => {
  const {label} = useParams()
  const {mode} = useParams()
  return (
    <>
      <Navbar className='navcustcreation ms-5' bg='light' expand="lg">
          <Arrow />
          <h6 className='text-center w-100 pt-1 me-5'>{label === undefined ? props.label : label} (Mode: {mode})</h6>
      </Navbar>
    </>
  )
}

export default NavBarSecondary