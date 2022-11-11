import React, { useState } from 'react'
import '../../../styles/Main.css'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import NavCustCreation from '../../layouts/Header/NavBars/NavCustCreation'
import CustInfoTabs from '../../../data/CustInfoTabs'
import NavBarSecondary from '../../layouts/Header/NavBars/NavBarSecondary'

const CustomerInformation = () => {
    const [key, setKey] = useState('BasicDetails')
  return (
    <>
    <NavBarSecondary />
    <div className='custinfo'>        
        <NavCustCreation />
        <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 navcustcreation1"
        fill
        variant='pills'
        >
            {CustInfoTabs.map(CustInfoTabs => (
                <Tab key={CustInfoTabs.id} eventKey={CustInfoTabs.label} title={CustInfoTabs.title}>
                    {CustInfoTabs.comp}
                </Tab>
            ))}
        </Tabs>
    </div>
    </>
  )
}

export default CustomerInformation