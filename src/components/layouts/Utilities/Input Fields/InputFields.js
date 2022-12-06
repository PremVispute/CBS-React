import '../../../../styles/Main.css'
import PageButton from './PageButton'
import CheckBox from './CheckBox'
import Date from './Date'
import DropDown from './DropDown'
import Input from './Input'
import InputCheck from './InputCheck'
import {Editor, Frame, Element} from "@craftjs/core"

const InputFields = ({data, disabled}) => {
  return (
    <>
        {/* <Element id="InputFields" is={InputFields} canvas> */}
            {data.type === "inputcheck" ?
                <InputCheck data={data} disabled={disabled}/>
            : data.type === "dropdown" ?        
                <DropDown data={data} disabled={disabled}/>        
            : data.type === "input" ?
                <Input data={data} disabled={disabled}/>
            : data.type === "button" ?
                <PageButton data={data}/>
            : data.type === "date" ?
                <Date data={data} disabled={disabled}/>
            : data.type === "checkbox" ?
                <CheckBox data={data} disabled={disabled}/>
            : //section-spacer
                <div key={data.id} className='section-spacer mt-3 mb-3'></div>
            }
        {/* </Element>  */}
    </>
  )
}

export default InputFields