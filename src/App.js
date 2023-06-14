import React from 'react'
import Navbar from './Components/Home/Navbar'
import Banner from './Components/Home/Banner'
import Services from './Components/Home/Services'
import Project from './Components/Home/Project'
import Types from './Components/Home/Types'
import Moving from './Components/Home/Moving'
import Review from './Components/Home/Review'

const App = () => {
  return (
    <div>
    <Banner/>
    <Services/>
    <Project/>
    <Types/>
   <Review/>
    </div>
  )
}

export default App