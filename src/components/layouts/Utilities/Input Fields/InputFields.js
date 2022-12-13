import '../../../../styles/Main.css'
import PageButton from './PageButton'

import { CheckBox } from './CheckBox'
import { Date } from './Date'
import { DropDown } from './DropDown'
import { Input } from './Input'
import { InputCheck } from './InputCheck'

const InputFields = ({data, disabled}) => {
  return (
    <>
        {data.fieldType === "inputcheck" ?
            <InputCheck data={data} disabled={disabled}/>
        : data.fieldType === "dropdown" ?
            <DropDown data={data} disabled={disabled}/>
        : data.fieldType === "input" ?
            <Input data={data} disabled={disabled}/>
        : data.fieldType === "button" ?
            <PageButton data={data}/>
        : data.fieldType === "date" ?
            <Date data={data} disabled={disabled}/>
        : data.fieldType === "checkbox" ?
            <CheckBox data={data} disabled={disabled}/>
        : //section-spacer
            <div key={data.id} className='section-spacer mt-3 mb-3'></div>
        }
    </>
  )
}

export default InputFields