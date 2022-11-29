import {Routes,Route} from 'react-router-dom'
import List from './componenets/List'
import Map from './componenets/Map'



function App() {
  

  return (

    
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/map' element={<Map/>}/>
      </Routes>
     
 
  )
}

export default App