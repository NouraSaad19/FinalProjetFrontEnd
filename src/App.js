import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navs from './component/Nav/Navs';
import HoomPage from './component/HoomPage';
import Login from './component/Login/Login';
import Missing from './component/Missing/Missing';
import SearchPage from './component/SearchPage';
import AddMissing from './component/AddMissing/AddMissing';
import Footer from './component/Footer/Footer';
import Create from './component/Create';

function App() {
  return (
    <div>
       <Router>
        <Navs/>
        {/* <Create/> */}
        <Routes>
           <Route path='/' element={<HoomPage/>}></Route> 
           <Route path='/HoomPage' element={<HoomPage/>}></Route> 
           <Route path='/Missing' element={<Missing/>}></Route> 
           <Route path='/SearchPage' element={<SearchPage/>}></Route>
           <Route path='/AddMissing' element={<AddMissing/>}></Route> 
           <Route path='/Login' element={<Login/>}></Route> 
        </Routes>
        <Footer/>
       </Router>
    </div>
  );
}

export default App;
