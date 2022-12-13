import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faCalendarDays, faSquareCaretDown, faTextWidth, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { useEditor } from "@craftjs/core"
import { Button } from 'react-bootstrap'

import { CheckBox } from './Input Fields/CheckBox'
import { Date } from './Input Fields/Date'
import { DropDown } from './Input Fields/DropDown'
import { Input } from './Input Fields/Input'
import { InputCheck } from './Input Fields/InputCheck'


const ToolBar = () => {
    const { connectors: {create} } = useEditor();
  return (
    <>
        <div className='toolbar align-items-center'>
            <OverlayTrigger 
            placement="left" 
            overlay={<Tooltip id='CheckBox' style={{marginTop: '20px'}}>CheckBox</Tooltip>}>
                <Button className='tool-button' variant='small'
                ref={ref=> create(ref, <CheckBox data={{ label: "example" }} disabled={true}/>)}>
                    <FontAwesomeIcon icon={faSquareCheck} className='mt-5'/>
                </Button>
            </OverlayTrigger>
            <OverlayTrigger 
            placement="left" 
            overlay={<Tooltip id='Date' style={{marginTop: '20px'}}>Input Date</Tooltip>}>
                <Button className='tool-button' variant='small'
                ref={ref=> create(ref, <Date data={{label: "example", aria: "example"}} disabled={true}/>)}>
                    <FontAwesomeIcon icon={faCalendarDays} className='mt-5'/>
                </Button>
            </OverlayTrigger>
            <OverlayTrigger 
            placement="left" 
            overlay={<Tooltip id='DropDown' style={{marginTop: '20px'}}>Input DropDown</Tooltip>}>
                <Button className='tool-button' variant='small'
                ref={ref=> create(ref, <DropDown data={{label: "example", idGiven: 'example', aria: "example", options: ["Head Office", "Main Office", "Second Office"]}} disabled={true} />)}>
                    <FontAwesomeIcon icon={faSquareCaretDown} className='mt-5'/>
                </Button>
            </OverlayTrigger>
            <OverlayTrigger 
            placement="left" 
            overlay={<Tooltip id='Text' style={{marginTop: '20px'}}>Input Text</Tooltip>}>
                <Button className='tool-button' variant='small'
                ref={ref=> create(ref, <Input data={{label: "example", aria: "example"}} disabled={true} />)}>
                    <FontAwesomeIcon icon={faTextWidth} className='mt-5'/>
                </Button>
            </OverlayTrigger>
            <OverlayTrigger 
            placement="left" 
            overlay={<Tooltip id='Check' style={{marginTop: '20px'}}>Input Check</Tooltip>}>
                <Button className='tool-button' variant='small'
                ref={ref=> create(ref, <InputCheck data={{label: "example", aria: "example"}} disabled={true} />)}>
                    <FontAwesomeIcon icon={faCheckDouble} className='mt-5'/>
                </Button>                
            </OverlayTrigger>
        </div>
    </>
  )
}

export default ToolBar