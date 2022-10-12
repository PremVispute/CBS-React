import '../../../../styles/Main.css'
import CheckBox from './CheckBox'
import Date from './Date'
import DropDown from './DropDown'
import Input from './Input'
import InputCheck from './InputCheck'

const InputFields = (props) => {
  return (
    <>
    {props.data.type === "inputcheck" ?
        <InputCheck data={props.data}/>
    : props.data.type === "dropdown" ?        
        <DropDown data={props.data}/>        
    : props.data.type === "input" ?
        <Input data={props.data}/>
    : props.data.type === "date" ?
        <Date data={props.data}/>
    : props.data.type === "checkbox" ?
        <CheckBox data={props.data}/>
    : //section-spacer
        <div key={props.data.id} className='section-spacer mt-3 mb-3'></div>
    } 
    </>
  )
}

export default InputFields