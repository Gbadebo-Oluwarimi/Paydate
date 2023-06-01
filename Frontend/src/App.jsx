import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Authroutes/Register';
import SignUp from './Authroutes/SignUp';
// create a apollo server connection here 


function App(){
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Register/>}/>
       <Route path='/create' element={<SignUp/>}/>
    </Routes>
    </Router>
  )
  }

export default App
