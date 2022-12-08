import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faCalendarDays, faSquareCaretDown, faTextWidth, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import '../../../styles/Main.css'
import { useEditor } from "@craftjs/core";
import CheckBox from './Input Fields/CheckBox'
import Date from './Input Fields/Date'
import DropDown from './Input Fields/DropDown'
import Input from './Input Fields/Input'
import InputCheck from './Input Fields/InputCheck'

const ToolBar = () => {
    const { connectors, query } = useEditor()
    debugger
  return (
    <>
        <div className='toolbar align-items-center'>
            <OverlayTrigger 
            placement="left" 
            overlay={<Tooltip id='CheckBox'>CheckBox</Tooltip>}>
                <FontAwesomeIcon 
                icon={faSquareCheck} 
                className='mt-5'
                ref={ref=> connectors.create(ref, <CheckBox data={{label: "example"}} disabled={true} />)}/>
            </OverlayTrigger>
            <OverlayTrigger 
            placement="left" 
            overlay={<Tooltip id='Date'>Input Date</Tooltip>}>
                <FontAwesomeIcon 
                icon={faCalendarDays} 
                className='mt-5'
                ref={ref=> connectors.create(ref, <Date data={{label: "example", aria: "example"}} disabled={true} />)}/>
            </OverlayTrigger>
            <OverlayTrigger 
            placement="left" 
            overlay={<Tooltip id='DropDown'>Input DropDown</Tooltip>}>
                <FontAwesomeIcon 
                icon={faSquareCaretDown} 
                className='mt-5'
                ref={ref=> connectors.create(ref, <DropDown data={{label: "example", aria: "example"}} disabled={true} />)}/>
            </OverlayTrigger>
            <OverlayTrigger 
            placement="left" 
            overlay={<Tooltip id='Text'>Input Text</Tooltip>}>
                <FontAwesomeIcon 
                icon={faTextWidth} 
                className='mt-5'
                ref={ref=> connectors.create(ref, <Input data={{label: "example", aria: "example"}} disabled={true} />)}/>
            </OverlayTrigger>
            <OverlayTrigger 
            placement="left" 
            overlay={<Tooltip id='Check'>Input Check</Tooltip>}>
                <FontAwesomeIcon 
                icon={faCheckDouble} 
                className='mt-5'
                ref={ref=> connectors.create(ref, <InputCheck data={{label: "example", aria: "example"}} disabled={true} />)}/>
            </OverlayTrigger>
        </div>
    </>
  )
}

export default ToolBar