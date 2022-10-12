import { Route, Routes } from 'react-router-dom'
import NavBarMain from './components/layouts/Header/NavBarMain'
import NavBarSecondary from './components/layouts/Header/NavBars/NavBarSecondary'
import SideBarMain from './components/layouts/SideBar/SideBarMain'
import CustomerInformation from './components/main/pages/CustomerInformation'
import Dashboard from './components/main/pages/Dashboard'

function App() {
  return (
    <>
      <NavBarMain />
      <SideBarMain />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/NavBarSecondary/:label' element={<NavBarSecondary />} />
        <Route path='/CustomerCreation/:label' element={<CustomerInformation />} />
      </Routes>
    </>
  );
}

export default App
