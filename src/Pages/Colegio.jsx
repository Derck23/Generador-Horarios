import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/colegio.css';
import { FiEye, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';

const colegios = [
  { id: 1, nombre: 'Colegio Nuevo Continente', fecha: '01/01/2024' },
  { id: 2, nombre: 'Colegio del Valle', fecha: '15/02/2023' },
  { id: 3, nombre: 'Colegio América Latina', fecha: '03/03/2022' },
  { id: 4, nombre: 'Colegio Queretano', fecha: '12/06/2021' },
  { id: 5, nombre: 'Colegio Patria', fecha: '10/10/2020' },
];

const Colegios = () => {
  const [buscar, setBuscar] = useState('');

  const handleBuscar = () => {
  };

  return (
    <div className="colegios-page">
      <Navbar active="COLEGIOS" />
      <main className="colegios-main">

        <div className="colegios-controles">
          <div className="colegios-busqueda">
            <input
              type="text"
              placeholder="Buscar..."
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
            />
            <FiSearch className="colegios-icono-buscar" onClick={handleBuscar} />
          </div>
        </div>

        <table className="colegios-tabla">
          <thead>
            <tr>
              <th>ID Colegio</th>
              <th>Nombre</th>
              <th>Fecha de Creación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {colegios.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.nombre}</td>
                <td>{c.fecha}</td>
                <td className="colegios-acciones">
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

export default Colegios;
