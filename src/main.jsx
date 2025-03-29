import { StrictMode } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Register from "./component/register";
import  LogIn  from './component/login';
import  Perfil  from './component/perfil';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  </StrictMode>,
)
