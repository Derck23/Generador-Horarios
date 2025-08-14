import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/usuario.css';
import { FiEye, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';

const usuarios = [
  { id: 1, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
  { id: 2, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
  { id: 3, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
  { id: 4, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
  { id: 5, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
  { id: 6, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
  { id: 7, email: 'prueba1@prueba.com', colegio: 'Colegio Nuevo Continente' },
];

const Usuario = () => {
  const [buscar, setBuscar] = useState('');

  const handleBuscar = () => {
  };

  return (
    <div className="usuarios-page">
      <Navbar active="USUARIOS" />
      <main className="usuarios-main">
        <div className="usuarios-controles">
          <div className="usuarios-busqueda">
            <input
              type="text"
              placeholder="Buscar..."
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
            />
            <FiSearch className="usuarios-icono-buscar" onClick={handleBuscar} />
          </div>
        </div>

        <table className="usuarios-tabla">
          <thead>
            <tr>
              <th>No. de Usuario</th>
              <th>Email</th>
              <th>Colegio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.email}</td>
                <td>{usuario.colegio}</td>
                <td className="usuarios-acciones">
                  <FiEye title="Ver" />
                  <FiEdit2 title="Editar" />
                  <FiTrash2 title="Eliminar" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export default Usuario;
