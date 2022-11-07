import React from 'react'
import NavBarSecondary from '../../layouts/Header/NavBars/NavBarSecondary'
import ModePage from '../../layouts/Utilities/ModePage'
import CustomerInformation from './CustomerInformation'
import { useParams } from 'react-router-dom'

const MainPage = () => {
    const {label} = useParams()
  return (
    <>
        <NavBarSecondary />
        {label === "Customer Creation: Individual" ? <ModePage /> : <CustomerInformation label="Customer Creation: Individual"/>}        
    </>
  )
}

export default MainPage