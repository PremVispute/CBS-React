import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link, useParams } from 'react-router-dom'
import ModePageData from '../../../data/ModePageData'

const ModePage = () => {
    // const {label} = useParams()
    // console.log(label)
  return (
    <>
    <div className='modepage'>
        <div className='row text-center'>
            {ModePageData.map(ModePageData => (
                <div key={ModePageData.id} className='col-md-3 mt-5'>
                    {/* <Link to={`/CustomerCreation/${ModePageData.label}`}> */}
                    <Button className='modepage-text' variant="outline-secondary" size="lg">
                        <FontAwesomeIcon className='dash-icon mb-2' icon={ModePageData.icon} /><br/>
                        {ModePageData.label}
                    </Button>
                    {/* </Link> */}
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default ModePage