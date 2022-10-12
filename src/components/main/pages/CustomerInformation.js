import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import NavCustCreation from '../../layouts/Header/NavBars/NavCustCreation'
import '../../../styles/Main.css'
import CustInfoTabs from '../../../data/CustInfoTabs'
import ModePage from '../../layouts/Utilities/ModePage'

const CustomerInformation = () => {
    const [key, setKey] = useState('BasicDetails')

  return (
    <>
    <ModePage />
    {/* <div className='custinfo'>        
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
    </div> */}
    </>
  )
}

export default CustomerInformation