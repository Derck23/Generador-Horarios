import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/materia.css';
import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';
import RegistrarMateria from '../Components/Modal/RegistrarMateria';

const Materia = () => {
  const [materias, setMaterias] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    const datosEjemplo = [
      {
        id: 1,
        nombre: 'Física',
        clave: 'FIS004',
        grupos: ['3 A', '2 A', '1 B'],
        horas: '12 hrs por semana',
      },
      {
        id: 2,
        nombre: 'Química',
        clave: 'QUI004',
        grupos: ['3 A', '2 A', '1 B'],
        horas: '12 hrs por semana',
      },
      {
        id: 3,
        nombre: 'Inglés',
        clave: 'ING004',
        grupos: ['3 A', '2 A', '1 B'],
        horas: '12 hrs por semana',
      },
      {
        id: 4,
        nombre: 'Matemáticas I',
        clave: 'MAT001',
        grupos: ['3 A', '2 A', '1 B'],
        horas: '12 hrs por semana',
      },
      {
        id: 5,
        nombre: 'Matemáticas II',
        clave: 'MAT002',
        grupos: ['3 A', '2 A', '1 B'],
        horas: '12 hrs por semana',
      },
      {
        id: 6,
        nombre: 'Matemáticas III',
        clave: 'MAT003',
        grupos: ['3 A', '2 A', '1 B'],
        horas: '12 hrs por semana',
      },
      {
        id: 7,
        nombre: 'Español',
        clave: 'ESPO04',
        grupos: ['3 A', '2 A', '1 B'],
        horas: '12 hrs por semana',
      },
    ];

    setMaterias(datosEjemplo);
  }, []);

  return (
    <div className="materias-page">
      <Navbar active="MATERIAS" />
      <main className="materias-main">
        <div className="materias-header">
          <div className="materias-colegio">
            <h2>Colegio Nuevo Continente</h2>
            <p>Plantel Querétaro</p>
            <p>Nivel: Secundaria</p>
          </div>
          <div className="materias-controles">
            <div className="materias-busqueda">
              <input type="text" placeholder="Buscar..." />
              <span className="icono-busqueda">🔍</span>
            </div>
            <button
              className="materias-boton"
              onClick={() => setMostrarModal(true)}
            >
              <span>＋</span> Crear materia
            </button>
          </div>
        </div>

        <table className="materias-tabla">
          <thead>
            <tr>
              <th>Materia</th>
              <th>Clave Materia</th>
              <th>Grupos</th>
              <th>Hrs. de clase</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {materias.map((materia) => (
              <tr key={materia.id}>
                <td>{materia.nombre}</td>
                <td>{materia.clave}</td>
                <td>
                  {materia.grupos.map((grupo, index) => (
                    <span key={index} className="grupo-chip">
                      {grupo}
                    </span>
                  ))}
                </td>
                <td>{materia.horas}</td>
                <td className="materias-acciones">
                  <FiEye className="accion-icono" title="Ver" />
                  <FiEdit2 className="accion-icono" title="Editar" />
                  <FiTrash2 className="accion-icono" title="Eliminar" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {mostrarModal && (
        <RegistrarMateria onClose={() => setMostrarModal(false)} />
      )}

      <Footer />
    </div>
  );
};

export default Materia;
