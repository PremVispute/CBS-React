import Arrow from '../../Utilities/Arrow'
import Navbar from 'react-bootstrap/Navbar'
import '../../../../styles/Header.css'
import { useParams } from 'react-router-dom'
import CustomerInformation from '../../../main/pages/CustomerInformation'

const NavBarSecondary = () => {
    const {label} = useParams()
  return (
    <>
        <Navbar className='navcustcreation ms-5' bg='light' expand="lg">
            <Arrow />
            <h5 className='text-center w-100 pt-1 me-5'>(Mode: {label})</h5>
        </Navbar>
        <CustomerInformation />
    </>
  )
}

export default NavBarSecondary