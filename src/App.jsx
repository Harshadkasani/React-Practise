//  function App(){
//   let x = 10             (Here we write JS code)
//   return (
//     <div>Hello</div>     ( return in webpage (HTML code))
//   )
// }

// export default App  (for import anywhere purpose)
              
                //  (or)  rafce 

import React from 'react'
import Home from "./components/Home"
import About from "./components/About"
import Project from "./components/Projects"
import Contact from "./components/Contacts"

const App = () => {
  return (
    <div>
       <Home />
       <About />
       <Project />
       <Contact />
    </div>
  )
}

export default App
