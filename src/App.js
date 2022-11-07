import { Route, Routes } from 'react-router-dom'
import NavBarMain from './components/layouts/Header/NavBarMain'
import SideBarMain from './components/layouts/SideBar/SideBarMain'
import Dashboard from './components/main/pages/Dashboard'
import MainPage from './components/main/pages/MainPage'

function App() {
  return (
    <>
      <NavBarMain />
      <SideBarMain />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/NavBarSecondary/:label' element={<MainPage />} />
        <Route path='/NavBarSecondary/CustomerCreation/:mode' element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App
