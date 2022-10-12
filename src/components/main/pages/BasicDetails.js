import BasicDetailsData from '../../../data/BasicDetailsData'
import '../../../styles/Main.css'
import InputFields from '../../layouts/Utilities/Input Fields/InputFields'
// import InputFields from '../../layouts/Utilities/Input Fields/InputFields'

const BasicDetails = () => {
  return (
    <>
        <div className='basic-details row align-content-start'>
            {BasicDetailsData.map(BasicDetailsData => (
                <InputFields data={BasicDetailsData}/>
            ))}
        </div>
    </>
  )
}

export default BasicDetails