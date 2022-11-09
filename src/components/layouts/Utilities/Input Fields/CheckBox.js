import Form from 'react-bootstrap/Form'

const CheckBox = ({data, disabled}) => {
  return (
    <>
    <div key={data.id} className='col-md-5 pt-2'>
        <Form.Check
          disabled={disabled}
          type='checkbox'
          label={data.label}
        />
    </div>
    <div className='col-md-1'></div>
    </>
  )
}

export default CheckBox