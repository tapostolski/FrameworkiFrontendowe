import { useState } from 'react'
import './App.css';
import RootLayout from './layouts/RootLayout.jsx';;
import {Route, Routes} from 'react-router-dom';
import PeoplePage from './pages/PeoplePage.jsx';
import Lab1Page from './pages/Lab1Page.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import object from './components/NavBarMenu.jsx';
import Lab2Page from './pages/Lab2Page.jsx';


import PersonProfileGenerator from './components/PersonProfileGenerator.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <RootLayout>
      <Routes>
        <Route path='/home' element={<main/>}/>
        <Route path='/lab1' element={<Lab1Page/>}/>
        <Route path='/lab2' element={<main/>}/>
        <Route path='/lab2/:id' element={<Lab2Page/>}/>
        <Route path='/people/:id' element={<PeoplePage/>}/>
        <Route path='/PersonProfileGenerator' element={<PersonProfileGenerator/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>
    </RootLayout>
    
  )
}

export default App
