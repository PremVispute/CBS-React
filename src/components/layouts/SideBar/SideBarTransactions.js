import ListGroup from 'react-bootstrap/ListGroup'
import SideBarTransactionData from '../../../data/SideBarTransactionData'
import '../../../styles/SideBar.css'

const SideBarTransactions = () => {
  return (
    <>
    <div className='sidebar-transactions'>
        <ListGroup>
            <ListGroup.Item variant='light' className='text-center'>
                Transactions
            </ListGroup.Item>
            {SideBarTransactionData.map(SideBarTransactionData => (
                <ListGroup.Item key={SideBarTransactionData.id} variant='light' action href={SideBarTransactionData.link}>
                    {SideBarTransactionData.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
    </>
  )
}

export default SideBarTransactions