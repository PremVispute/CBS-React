import { Button, Form, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SideBarMainData from '../../../data/SideBarMainData'

const EditPage = () => {
  return (
    <>
        <div className='basic-details-edit pt-5'>
            <InputGroup className='edit-dropdown m-5'>
                <InputGroup.Text className='edit-dropdown-width'>Select the module you want to edit</InputGroup.Text>
                <Form.Select>
                    <option value="-1">Select</option>
                    {SideBarMainData.map(SideBarMainData => (
                        <option value={SideBarMainData.id}>{SideBarMainData.label}</option>
                    ))}
                </Form.Select>
            </InputGroup>
            <InputGroup className='edit-dropdown m-5'>
                <InputGroup.Text className='edit-dropdown-width'>Select the page you want to edit</InputGroup.Text>
                <Form.Select>
                    <option value="-1">Select</option>
                    <option value="1">Customer Creation: Individual</option>
                    <option value="2">Customer Creation: Non-Individual</option>
                    <option value="3">Customer Maintenance</option>
                    <option value="4">UN Negative List</option>
                    <option value="5">Excel Upload</option>
                    <option value="6">194N Bulk Upload</option>
                </Form.Select>
            </InputGroup>
            <InputGroup className='edit-dropdown m-5'>
                <InputGroup.Text className='edit-dropdown-width'>Select the tab you want to edit</InputGroup.Text>
                <Form.Select>
                    <option value="-1">Select</option>
                    <option value="1">Basic Details</option>
                    <option value="2">Employment Details</option>
                    <option value="3">Individual Parent/Spouse Details</option>
                    <option value="4">Individual Credit Details</option>
                    <option value="5">Fatca Details</option>
                    <option value="6">Signature</option>
                    <option value="7">Photo</option>
                    <option value="8">Insta Account</option>
                </Form.Select>
            </InputGroup>
            <Link to='/BasicDetailsEdit'>
                <Button variant="outline-secondary" size='lg' className='edit-button'>Edit Page</Button>
            </Link>
        </div>
    </>
  )
}

export default EditPage