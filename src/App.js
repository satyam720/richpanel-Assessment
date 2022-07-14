import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import RegisterPage from './Pages/RegisterPage/registerPage';
import { useEffect } from 'react';
import LoginPage from './Pages/LoginPage/LoginPage';
import FbPage from './Pages/FbPage/Fbpage';


function App() {

  useEffect(()=>{
    console.log("this is link", Link);
  })
  return (
    <div className="App">
     
     <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/fbpage" element={<FbPage />} />
     </Routes>
    </div>
  );
} 

export default App;
