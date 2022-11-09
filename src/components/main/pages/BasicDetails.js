import BasicDetailsData from '../../../data/BasicDetailsData'
import '../../../styles/Main.css'
import InputFields from '../../layouts/Utilities/Input Fields/InputFields'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const BasicDetails = () => {
  const {mode} = useParams()
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if(mode==="Create" || mode==="Edit")
      setDisabled(false)
    else
      setDisabled(true)
  }, [mode])

  return (
    <>
        <div className='basic-details row align-content-start'>
            {BasicDetailsData.map(BasicDetailsData => (
                <InputFields data={BasicDetailsData} disabled={disabled}/>
            ))}
            <div className='text-center mt-3 mb-3'>
              <Button variant="primary" size='sm' className='m-2 page-buttons'>Submit</Button>
              <Button variant="primary" size='sm' className='m-2 page-buttons'>Update</Button>
              <Button variant="primary" size='sm' className='m-2 page-buttons'>Reset</Button>
              <Button variant="primary" size='sm' className='m-2 page-buttons'>Primary</Button>
              <Button variant="primary" size='sm' className='m-2 page-buttons'>Primary</Button>
            </div>
        </div>
    </>
  )
}

export default BasicDetails