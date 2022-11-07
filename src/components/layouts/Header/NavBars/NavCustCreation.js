import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

const NavCustCreation = () => {
  return (
    <>
        <Navbar bg='light' className='navcustcreation1' expand="lg">
            <div className='col-md-3 me-3'>
                <InputGroup size='sm'>
                    <InputGroup.Text className='input'>Customer ID</InputGroup.Text>
                    <Form.Control
                    className='input'
                    //aria-label=
                    //aria-describedby=
                    />
                </InputGroup>
            </div>
            <div className='col-md-4'>
                <InputGroup size='sm'>
                    <InputGroup.Text className='input'>Name</InputGroup.Text>
                    <Form.Control
                    disabled
                    className='input'
                    //aria-label=
                    //aria-describedby=
                    />
                </InputGroup>
            </div>
            <div className='w-100 d-flex justify-content-end'>
                <Button as="input" className='me-2 navbutton' size='sm' type="submit" value="Search" />
                <Button as="input" className='me-2 navbutton' size='sm' type="submit" value="Reset" />
                <Button as="input" className='me-2 navbutton' size='sm' type="submit" value="Print" />
                <Button as="input" className='me-2 navbutton' size='sm' type="submit" value="View Documents" />
            </div>
        </Navbar>
    </>
  )
}

export default NavCustCreation