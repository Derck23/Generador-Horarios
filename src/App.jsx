import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/HomeAdmin';
import Materia from './Pages/Materia';
import Horario from './Pages/Horario';
import Colegio from './Pages/Colegio';
import Profesor from './Pages/Profesor';
import Usuario from './Pages/Usuario';
import Grupo from './Pages/Grupo';
import CrearColegio from './Components/Modal/CrearColegio';
import RegistrarUsuario from './Components/Modal/RegistrarUsuario';
import RegistrarMateria from './Components/Modal/RegistrarMateria';
import HomeAdmin from './Pages/HomeAdmin';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<ProtectedRoute><HomeAdmin /></ProtectedRoute>} />
        <Route path="/Materia" element={<ProtectedRoute><Materia /></ProtectedRoute>} />
        <Route path="/Horario" element={<ProtectedRoute><Horario /></ProtectedRoute>} />
        <Route path="/Profesor" element={<ProtectedRoute><Profesor /></ProtectedRoute>} />
        <Route path="/Usuario" element={<ProtectedRoute><Usuario /></ProtectedRoute>} />
        <Route path="/Colegio" element={<ProtectedRoute><Colegio /></ProtectedRoute>} />
        <Route path="/Grupo" element={<ProtectedRoute><Grupo /></ProtectedRoute>} />
        <Route path="/crear-colegio" element={<ProtectedRoute><CrearColegio /></ProtectedRoute>} />
        <Route path="/registrar-usuario" element={<ProtectedRoute><RegistrarUsuario /></ProtectedRoute>} />
        <Route path="/registrar-materia" element={<ProtectedRoute><RegistrarMateria /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
