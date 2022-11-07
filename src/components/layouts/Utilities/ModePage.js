import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import ModePageCRMData from '../../../data/ModePageCRMData'

const ModePage = () => {
    const {label} = useParams()
    console.log(label)
  return (
    <>
    <div className='modepage'>
        <div className='row text-center'>
            {ModePageCRMData.map(ModePageCRMData => (
              <>
              {ModePageCRMData.display === "Yes" ?                
                <div key={ModePageCRMData.id} className='col-md-3 mt-5'>
                    <Link to={`/NavBarSecondary/CustomerCreation/${ModePageCRMData.label}`}>
                      <Button className='modepage-text' variant="outline-secondary" size="lg">
                          <FontAwesomeIcon className='dash-icon mb-2' icon={ModePageCRMData.icon} /><br/>
                          {ModePageCRMData.label}
                      </Button>
                    </Link>
                </div>
                : 
                <></>                
              }             
              </>
            ))}
        </div>
      </div>
    </>
  )
}

export default ModePage