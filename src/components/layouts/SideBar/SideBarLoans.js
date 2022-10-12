import ListGroup from 'react-bootstrap/ListGroup'
import SideBarLoansData from '../../../data/SideBarLoansData'
import '../../../styles/SideBar.css'

const SideBarLoans = () => {
  return (
    <>
    <div className='sidebar-secondary'>
        <ListGroup>
            <ListGroup.Item variant='light' className='text-center'>
                Loans and Advances
            </ListGroup.Item>
            {SideBarLoansData.map(SideBarLoansData => (
                <ListGroup.Item key={SideBarLoansData.id} variant='light' action href={SideBarLoansData.link}>
                    {SideBarLoansData.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
    </>
  )
}

export default SideBarLoans