import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/materia.css';
import { FiEye, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import RegistrarMateria from '../Components/Modal/RegistrarMateria';
import { obtenerMaterias, eliminarMateria } from '../services/colegioService'; // <-- Importa el servicio

const Materia = () => {
  const [materias, setMaterias] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  // Cargar materias desde el backend
  const fetchMaterias = async () => {
    try {
      const data = await obtenerMaterias();
      setMaterias(data);
    } catch (error) {
      console.error("Error al obtener materias:", error);
      setMaterias([]);
    }
  };

  useEffect(() => {
    fetchMaterias();
  }, []);

  const handleVerMateria = (materia) => {
  };

  const handleEditarMateria = (materia) => {
  };

  const handleEliminarMateria = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta materia?')) {
      try {
        await eliminarMateria(id);
        await fetchMaterias(); // Recargar lista
        alert('Materia eliminada exitosamente');
      } catch (error) {
        console.error("Error al eliminar materia:", error);
        alert('Error al eliminar la materia');
      }
    }
  };

  const handleMateriaCreada = async () => {
    await fetchMaterias(); // Recargar lista cuando se crea una materia
  };


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
              <FiSearch className="materias-icono-buscar" />
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
                <td>{materia.nombreMateria || materia.nombre}</td>
                <td>{materia.clave || '-'}</td>
                <td>
                  {(materia.grupos && Array.isArray(materia.grupos)) ? (
                    materia.grupos.map((grupo, index) => (
                      <span key={index} className="grupo-chip">
                        {grupo}
                      </span>
                    ))
                  ) : (
                    <span>-</span>
                  )}
                </td>
                <td>{materia.horas}</td>
                <td className="materias-acciones">
                  {/*<button 
                    className="ver-materia-btn"
                    onClick={() => handleVerMateria(materia)}
                    title="Ver"
                  >
                    <FiEye /> Ver
                  </button>
                  <button 
                    className="editar-materia-btn"
                    onClick={() => handleEditarMateria(materia)}
                    title="Editar"
                  >
                    <FiEdit2 /> Editar
                  </button>*/}
                  <button 
                    className="eliminar-materia-btn"
                    onClick={() => handleEliminarMateria(materia.id)}
                    title="Eliminar"
                  >
                    <FiTrash2 /> Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {mostrarModal && (
        <RegistrarMateria
          onClose={() => setMostrarModal(false)}
          onMateriaAgregada={handleMateriaCreada}
        />
      )}

      <Footer />
    </div>
  );
};

export default Materia;
