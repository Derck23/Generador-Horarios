import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/horario.css';
import { FiEye, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';

const horarios = [
  { id: 1, grupo: '3 A', fecha: '02/05/2025', turno: 'Matutino' },
  { id: 2, grupo: '1 B', fecha: '02/05/2025', turno: 'Vespertino' },
  { id: 3, grupo: '2 A', fecha: '30/04/2025', turno: 'Matutino' },
  { id: 4, grupo: '1 A', fecha: '29/04/2025', turno: 'Vespertino' },
  { id: 5, grupo: '3 B', fecha: '29/04/2025', turno: 'Vespertino' },
  { id: 6, grupo: '2 B', fecha: '01/03/2025', turno: 'Matutino' },
  { id: 7, grupo: '1 C', fecha: '01/03/2025', turno: 'Matutino' },
];

const Horario = () => {
  const [buscar, setBuscar] = useState('');

  const handleBuscar = () => {
  };

  return (
    <div className="horarios-page">
      <Navbar active="HORARIOS" />
      <main className="horarios-main">
        <div className="horarios-colegio">
          <h2>Colegio Nuevo Continente</h2>
          <p>Plantel Querétaro</p>
          <p>Nivel: Secundaria</p>
        </div>

        <div className="horarios-controles">
          <div className="horarios-busqueda">
            <input
              type="text"
              placeholder="Buscar..."
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
            />
            <FiSearch className="horarios-icono-buscar" onClick={handleBuscar} />
          </div>
        </div>

        <table className="horarios-tabla">
          <thead>
            <tr>
              <th>No. de Horario</th>
              <th>Grupo</th>
              <th>Fecha de creación</th>
              <th>Turno</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {horarios.map((h) => (
              <tr key={h.id}>
                <td>{h.id}</td>
                <td>{h.grupo}</td>
                <td>{h.fecha}</td>
                <td>
                  <span className="turno-chip">{h.turno}</span>
                </td>
                <td className="horarios-acciones">
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

export default Horario;
