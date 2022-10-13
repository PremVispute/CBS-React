import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <>
    <Container>
        <Form className="d-flex">
        <Form.Control
            style={{width: "15rem", height: "25px"}}
            type="search"
            placeholder="Search"
            aria-label="Search"
        />
        <a href='#active1'>
          <FontAwesomeIcon className='me-5 ms-3 main-icon' icon={faMagnifyingGlass} />
        </a>
        </Form>
    </Container>
    </>
  )
}

export default SearchBar