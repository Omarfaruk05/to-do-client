import './App.css';
import NavComponent from './components/Shaired/NavComponent/NavComponent';
import{Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import Selected from './components/Selected/Selected';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="bg-white">
      <NavComponent></NavComponent>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/selected' element={<Selected></Selected>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
