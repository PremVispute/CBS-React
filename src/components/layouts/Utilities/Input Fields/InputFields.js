import '../../../../styles/Main.css'
import CheckBox from './CheckBox'
import Date from './Date'
import DropDown from './DropDown'
import Input from './Input'
import InputCheck from './InputCheck'

const InputFields = ({data, disabled}) => {
  return (
    <>
    {data.type === "inputcheck" ?
        <InputCheck data={data} disabled={disabled}/>
    : data.type === "dropdown" ?        
        <DropDown data={data} disabled={disabled}/>        
    : data.type === "input" ?
        <Input data={data} disabled={disabled}/>
    : data.type === "date" ?
        <Date data={data} disabled={disabled}/>
    : data.type === "checkbox" ?
        <CheckBox data={data} disabled={disabled}/>
    : //section-spacer
        <div key={data.id} className='section-spacer mt-3 mb-3'></div>
    } 
    </>
  )
}

export default InputFields