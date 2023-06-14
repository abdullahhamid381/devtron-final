import React from 'react'
import Navbar from './Components/Home/Navbar'
import Banner from './Components/Home/Banner'
import Services from './Components/Home/Services'
import Project from './Components/Home/Project'
import Types from './Components/Home/Types'

const App = () => {
  return (
    <div>
    <Banner/>
    <Services/>
    <Project/>
    <Types/>
    </div>
  )
}

export default App