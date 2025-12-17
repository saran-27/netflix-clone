import './App.css';
import Home from './Componenets/Pages/Home/Home'
import { Route,Routes, useNavigate } from 'react-router-dom';
import Login from '../src/Componenets/Pages/Login/Login'
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import {auth} from './Componenets/Firebase'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  
  const navigate=useNavigate();

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user && window.location.pathname !== '/login') {
      navigate('/login');
    }
  });
  return () => unsubscribe();
}, [navigate]);

  return (
    <div className="App">
       <ToastContainer />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
