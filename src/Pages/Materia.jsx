import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/materia.css';
import { FiEye, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import RegistrarMateria from '../Components/Modal/RegistrarMateria';
import { obtenerMaterias } from '../services/colegioService'; // <-- Importa el servicio

const Materia = () => {
  const [materias, setMaterias] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  // Cargar materias desde el backend
  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const data = await obtenerMaterias();
        setMaterias(data);
      } catch (error) {
        console.error("Error al obtener materias:", error);
        setMaterias([]);
      }
    };
    fetchMaterias();
  }, []);

  const handleVerMateria = (materia) => {
  };

  const handleEditarMateria = (materia) => {
  };

  const handleEliminarMateria = (id) => {
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
                  <FiEye className="accion-icono" title="Ver" onClick={() => handleVerMateria(materia)} />
                  <FiEdit2 className="accion-icono" title="Editar" onClick={() => handleEditarMateria(materia)}/>
                  <FiTrash2 className="accion-icono" title="Eliminar" onClick={() => handleEliminarMateria(materia.id)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {mostrarModal && (
        <RegistrarMateria
          onClose={() => setMostrarModal(false)}
          onMateriaAgregada={() => {
            // Recargar materias después de agregar
            obtenerMaterias().then(setMaterias);
            setMostrarModal(false);
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default Materia;
