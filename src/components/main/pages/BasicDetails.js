import BasicDetailsData from '../../../data/BasicDetailsData'
import '../../../styles/Main.css'
import InputFields from '../../layouts/Utilities/Input Fields/InputFields'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const BasicDetails = (props) => {
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
      <div className={props.mode==="edit" ? "basic-details-edit row" : "basic-details row align-content-start"}>
          {BasicDetailsData.map(BasicDetailsData => (
              <InputFields data={BasicDetailsData} disabled={disabled}/>
          ))}
      </div>
    </>
  )
}

export default BasicDetails