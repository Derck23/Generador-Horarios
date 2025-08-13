import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/profesor.css';
import { FiEye, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import RegistrarProfesor from '../Components/Modal/RegistrarProfesor';
import { listarProfesores, eliminarProfesor } from '../services/profesorService'; // Importa el servicio

const Profesor = () => {
  const [buscar, setBuscar] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [profesores, setProfesores] = useState([]); // Nuevo estado

  const fetchProfesores = async () => {
    try {
      const data = await listarProfesores();
      console.log("Respuesta de listarProfesores:", data);
      setProfesores(Array.isArray(data.data) ? data.data : []);
    } catch (error) {
      console.error("Error al cargar los profesores:", error);
      setProfesores([]);
    }
  };

  useEffect(() => {
    fetchProfesores();
  }, []);

  const handleEliminarProfesor = async (profesorId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este profesor?')) {
      try {
        await eliminarProfesor(profesorId);
        await fetchProfesores(); // Recargar lista
        alert('Profesor eliminado exitosamente');
      } catch (error) {
        console.error("Error al eliminar profesor:", error);
        alert('Error al eliminar el profesor');
      }
    }
  };

  const handleProfesorCreado = async () => {
    await fetchProfesores(); // Recargar lista cuando se crea un profesor
  };

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
          <button
            className="profesores-boton"
            onClick={() => setMostrarModal(true)}
          >
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
                <td>
                  {`${profesor.nombre || profesor.nombres || ''} ${profesor.apellidoPaterno || ''} ${profesor.apellidoMaterno || ''}`}
                </td>
                <td>
                  {(profesor.materias || []).map((materia, index) => (
                    <span key={index} className="profesor-chip">{materia}</span>
                  ))}
                </td>
                <td>
                  {(profesor.grupos || []).map((grupo, index) => (
                    <span key={index} className="profesor-chip">{grupo}</span>
                  ))}
                </td>
                <td>{profesor.horas}</td>
                <td className="profesores-acciones">
                  {/*<button
                    className="ver-profesor-btn"
                    title="Ver"
                  >
                    <FiEye /> Ver
                  </button>
                  <button
                    className="editar-profesor-btn"
                    title="Editar"
                  >
                    <FiEdit2 /> Editar
                  </button>*/}
                  <button
                    className="eliminar-profesor-btn"
                    onClick={() => handleEliminarProfesor(profesor.id)}
                    title="Eliminar"
                  >
                    <FiTrash2 /> Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {mostrarModal && (
          <div className="modal-overlay">
            <RegistrarProfesor 
              onClose={() => setMostrarModal(false)}
              onProfesorCreado={handleProfesorCreado}
            />
            <button
              className="modal-close"
              onClick={() => setMostrarModal(false)}
              style={{
                position: 'absolute',
                top: 20,
                right: 30,
                background: 'transparent',
                border: 'none',
                fontSize: '2rem',
                cursor: 'pointer',
                color: '#333'
              }}
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Profesor;
