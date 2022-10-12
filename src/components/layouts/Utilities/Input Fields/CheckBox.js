import Form from 'react-bootstrap/Form'

const CheckBox = (props) => {
  return (
    <>
    <div key={props.data.id} className='col-md-5 pt-2'>
        <Form.Check
            type='checkbox'
            label={props.data.label}
        />
    </div>
    <div className='col-md-1'></div>
    </>
  )
}

export default CheckBox