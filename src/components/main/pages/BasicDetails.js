import BasicDetailsData from '../../../data/BasicDetailsData'
import InputFields from '../../layouts/Utilities/Input Fields/InputFields'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBarEditPage from '../../layouts/Header/NavBars/NavBarEditPage'
import { Editor, Frame, Element } from "@craftjs/core"
import InputGroup from 'react-bootstrap/InputGroup'
import { Container } from 'react-bootstrap'
import ToolBar from '../../layouts/Utilities/ToolBar'

import { CheckBox } from '../../../components/layouts/Utilities/Input Fields/CheckBox'
import { Date } from '../../../components/layouts/Utilities/Input Fields/Date'
import { DropDown } from '../../../components/layouts/Utilities/Input Fields/DropDown'
import { Input } from '../../../components/layouts/Utilities/Input Fields/Input'
import { InputCheck } from '../../../components/layouts/Utilities/Input Fields/InputCheck'

const BasicDetails = (props) => {
  const { mode } = useParams()
  const [ disabled, setDisabled ] = useState(true)
  const [editingState, setEditingState] = useState(1);

  useEffect(() => {
    if(mode==="Create" || mode==="Edit")
      setDisabled(false)
    else
      setDisabled(true)
  }, [mode])

  return (
    <>
      <Editor resolver={{ InputFields, CheckBox, Date, DropDown, Input, InputCheck, InputGroup, Container }}>
        {props.mode==="edit" ? <NavBarEditPage editingState={editingState}/> : <></>}
        {props.mode==="edit" ? <ToolBar /> : <></>}
        <Frame>
          <Element is={Container} canvas className={props.mode==="edit" ? "basic-details-edit row" : "basic-details row align-content-start"}>
            {BasicDetailsData.map(BasicDetailsData => (
                <InputFields data={BasicDetailsData} disabled={disabled}/>
            ))}
          </Element>
        </Frame>
      </Editor>
    </>
  )
}

export default BasicDetails