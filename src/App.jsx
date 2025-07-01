import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/HomeAdmin';
import Materia from './Pages/Materia';
import Horario from './Pages/Horario';
import Colegio from './Pages/Colegio';
import Profesor from './Pages/Profesor';
import Usuario from './Pages/Usuario';
import CrearColegio from './Components/Modal/CrearColegio';
import RegistrarUsuario from './Components/Modal/RegistrarUsuario';
import RegistrarMateria from './Components/Modal/RegistrarMateria';
import HomeAdmin from './Pages/HomeAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<HomeAdmin />} />
        <Route path="/Materia" element={<Materia />} />
        <Route path="/Horario" element={<Horario />} />
        <Route path="/Profesor" element={<Profesor />} />
        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/Colegio" element={<Colegio />} />
        <Route path="/crear-colegio" element={<CrearColegio />} />
        <Route path="/registrar-usuario" element={<RegistrarUsuario />} />
        <Route path="/registrar-materia" element={<RegistrarMateria />} />
      </Routes>
    </Router>
  );
}

export default App;
