

import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import MainRoutes from './MainRoutes/MainRoutes'

function App() {
 

  return (
   
    <div className='app-wrapper'>
      <Header color="light" light={true} expand="md" container="md"  />
      <MainRoutes/>
      <Footer/>
    </div>  
  )
}

export default App
