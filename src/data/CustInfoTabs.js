import BasicDetails from "../components/main/pages/BasicDetails"

const CustInfoTabs = [
    {  
        id: 1, 
        label: 'BasicDetails',
        comp: <BasicDetails />,
        title: 'Basic Details'
    },
    {
        id: 2, 
        label: 'EmploymentDetails',
        title: 'Employment Details'
    },
    {
        id: 3, 
        label: 'IndividualDetails',
        title: 'Individual Parent/Spouse Details'
    },
    {
        id: 4, 
        label: 'CreditDetails',
        title: 'Individual Credit Details'
    },
    {
        id: 5, 
        label: 'FatcaDetails',
        title: 'Fatca Details'
    },
    {
        id: 6, 
        label: 'Signature',
        title: 'Signature'
    },
    {
        id: 7, 
        label: 'Photo',
        title: 'Photo'
    },
    {
        id: 8, 
        label: 'InstaAccount',
        title: 'Insta Account'
    }

]

export default CustInfoTabs