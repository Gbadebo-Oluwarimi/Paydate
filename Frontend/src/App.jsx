import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Authroutes/Register';
// create a apollo server connection here 


function App(){
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Register/>}/>
    </Routes>
    </Router>
  )
  }

export default App
