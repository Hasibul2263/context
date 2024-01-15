
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Auth/Login/Login';
import Signup from './Pages/Auth/Signup/Signup';
import Home from './Pages/CMS/Home/Home';
import Data from './Pages/Context/Data';
import Parent from './Pages/Props/Parent';
import ChildB from './Pages/Props/ChildB';
import ChildA from './Pages/Props/ChildA';
import ChildC from './Pages/Props/ChildC';




function App() {




  return (
    <div className="App">
      {/* <Data>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home />} />
            <Route path='/data' element={<Data />} />
          </Routes>
        </BrowserRouter>
      </Data> */}
       <Parent/>

    </div>
  );
};
export default App;
