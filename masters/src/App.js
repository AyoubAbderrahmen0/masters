import './App.css';
import { Route, Routes } from "react-router-dom";
import EtudiantProfile from './pages/EtudiantProfile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navb from './Components/Navb';
import { useDispatch } from 'react-redux';
import { current } from './redux/Actions/EtudiantAction';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  useEffect(() => {
    if (token) {
      dispatch(current())
    }

  }, [token])
  return (
    <div className="App">
      <Navb />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/account' element={<EtudiantProfile />} />
      </Routes>
    </div>
  );
}

export default App;
