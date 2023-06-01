import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Authroutes/Register';
import SignUp from './Authroutes/SignUp';
import Userpage from './Mainpage/Userpage';
// create a apollo server connection here 


function App(){
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Register/>}/>
       <Route path='/create' element={<SignUp/>}/>
       <Route path="/User" element={<Userpage/>}/>
    </Routes>
    </Router>
  )
  }

export default App
