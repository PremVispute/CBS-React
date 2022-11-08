import NavBarSecondary from '../../layouts/Header/NavBars/NavBarSecondary'
import ModePage from '../../layouts/Utilities/ModePage'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { DivContext } from '../../../App'

const MainPage = () => {
    const { label } = useParams()
    const { setDiv } = useContext(DivContext)
    setDiv("div1")
  return (
    <>
        <NavBarSecondary/>
        <ModePage label={label}/>
    </>
  )
}

export default MainPage