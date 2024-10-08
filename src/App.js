import { useState, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBarMain from './components/layouts/Header/NavBarMain'
import SideBarMain from './components/layouts/SideBar/SideBarMain'
import Dashboard from './components/main/pages/Dashboard'
import MainPage from './components/main/pages/MainPage'
import CustomerInformation from './components/main/pages/CustomerInformation'
import EditPage from './components/main/pages/EditPage'
import BasicDetails from './components/main/pages/BasicDetails'

export const DivContext = createContext()

function App() {
  const [div, setDiv] = useState("div2")

  return (
    <DivContext.Provider value={{ div, setDiv }}>
      <NavBarMain />
      <SideBarMain />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/NavBarSecondary/:label' element={<MainPage />} />
        <Route path='/NavBarSecondary/:label/:mode' element={<CustomerInformation />} />
        <Route path='/EditPages' element={<EditPage />} />
        <Route path='/BasicDetailsEdit' element={<BasicDetails mode="edit"/>} />
      </Routes>
    </DivContext.Provider>
  );
}

export default App
