import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Favorites from './Pages/Favorites.jsx'

const App = () => {

  return (
    <main className='main-content'>
    <Routes>

   <Route path='/' element={<Home />}/>
   <Route path='/Favorites' element={<Favorites />}/>

    </Routes>
   
    </main>
  )
}

export default App