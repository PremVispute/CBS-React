import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faCalendarDays, faSquareCaretDown, faTextWidth, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../../../styles/Main.css'

const ToolBar = () => {
  return (
    <>
        <div className='toolbar align-items-center'>
            <OverlayTrigger placement="left" overlay={<Tooltip id='CheckBox'>CheckBox</Tooltip>}>
                <FontAwesomeIcon icon={faSquareCheck} className='mt-5'/>
            </OverlayTrigger>
            <OverlayTrigger placement="left" overlay={<Tooltip id='Date'>Input Date</Tooltip>}>
                <FontAwesomeIcon icon={faCalendarDays} className='mt-5'/>
            </OverlayTrigger>
            <OverlayTrigger placement="left" overlay={<Tooltip id='DropDown'>Input DropDown</Tooltip>}>
                <FontAwesomeIcon icon={faSquareCaretDown} className='mt-5'/>
            </OverlayTrigger>
            <OverlayTrigger placement="left" overlay={<Tooltip id='Text'>Input Text</Tooltip>}>
                <FontAwesomeIcon icon={faTextWidth} className='mt-5'/>
            </OverlayTrigger>
            <OverlayTrigger placement="left" overlay={<Tooltip id='Check'>Input Check</Tooltip>}>
                <FontAwesomeIcon icon={faCheckDouble} className='mt-5'/>
            </OverlayTrigger>
        </div>
    </>
  )
}

export default ToolBar