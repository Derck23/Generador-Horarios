import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/profesor.css';
import { FiEye, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';

const profesores = [
  {
    id: 1,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
  {
    id: 2,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
  {
    id: 3,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
  {
    id: 4,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
  {
    id: 5,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
  {
    id: 6,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
  {
    id: 7,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
];

const Profesor = () => {
  const [buscar, setBuscar] = useState('');

  const handleBuscar = () => {
  };

  return (
    <div className="profesores-page">
      <Navbar active="PROFESORES" />
      <main className="profesores-main">
        <div className="profesores-colegio">
          <h2>Colegio Nuevo Continente</h2>
          <p>Plantel Querétaro</p>
          <p>Nivel: Secundaria</p>
        </div>

        <div className="profesores-controles">
          <div className="profesores-busqueda">
            <input
              type="text"
              placeholder="Buscar..."
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
            />
            <FiSearch className="profesores-icono-buscar" onClick={handleBuscar} />
          </div>
          <button className="profesores-boton">
            <span>＋</span> Crear profesor
          </button>
        </div>

        <table className="profesores-tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Materias</th>
              <th>Grupos</th>
              <th>Hrs. de clase</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {profesores.map((profesor) => (
              <tr key={profesor.id}>
                <td>{profesor.nombre}</td>
                <td>
                  {profesor.materias.map((materia, index) => (
                    <span key={index} className="profesor-chip">{materia}</span>
                  ))}
                </td>
                <td>
                  {profesor.grupos.map((grupo, index) => (
                    <span key={index} className="profesor-chip">{grupo}</span>
                  ))}
                </td>
                <td>{profesor.horas}</td>
                <td className="profesores-acciones">
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

export default Profesor;
