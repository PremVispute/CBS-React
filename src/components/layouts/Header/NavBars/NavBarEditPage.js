import React from 'react'
import { Navbar } from 'react-bootstrap'
import Arrow from '../../Utilities/Arrow'

const NavBarEditPage = () => {
  return (
    <>
        <Navbar className='naveditpage ms-5' bg='light' expand="lg">
            <Arrow />
            <h6 className='text-center w-100 pt-1 me-5'>Basic Details Edit Page</h6>
        </Navbar>
    </>
  )
}

export default NavBarEditPage