import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Materia from './Pages/Opciones/Materia';
import Horario from './Pages/Opciones/Horario';
import Profesor from './Pages/Opciones/Profesor';
import Usuario from './Pages/Opciones/Usuario';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Materia" element={<Materia />} />
        <Route path="/Horario" element={<Horario />} />
        <Route path="/Profesor" element={<Profesor />} />
        <Route path="/Usuario" element={<Usuario />} />
      </Routes>
    </Router>
  );
}

export default App;
