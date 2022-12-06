import BasicDetailsData from '../../../data/BasicDetailsData'
import '../../../styles/Main.css'
import InputFields from '../../layouts/Utilities/Input Fields/InputFields'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBarEditPage from '../../layouts/Header/NavBars/NavBarEditPage'
import {Editor, Frame, Element} from "@craftjs/core"

const BasicDetails = (props) => {
  const { mode } = useParams()
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if(mode==="Create" || mode==="Edit")
      setDisabled(false)
    else
      setDisabled(true)
  }, [mode])

  return (
    <>
      <Editor resolver={{InputFields}} indicator={{'success': '#2d9d78', 'error': '#e34850'}}>
        {props.mode==="edit" ? <NavBarEditPage /> : <></>}
        <Frame>
          {/* <Element id="InputFields" is={InputFields} canvas> */}
            <div className={props.mode==="edit" ? "basic-details-edit row" : "basic-details row align-content-start"}>
              {BasicDetailsData.map(BasicDetailsData => (
                <InputFields data={BasicDetailsData} disabled={disabled}/>
              ))}
            </div>
          {/* </Element> */}
        </Frame>
      </Editor>
    </>
  )
}

export default BasicDetails