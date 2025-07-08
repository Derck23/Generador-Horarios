import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/materia.css';
import { FiEye, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import RegistrarGrupo from '../Components/Modal/RegistrarGrupo';
import { gruposPorColegio } from '../services/colegioService';

const Grupo = () => {
  const [grupos, setGrupos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  // Cargar grupos desde el backend
  useEffect(() => {
    const fetchGrupos = async () => {
      try {
        // Puedes pasar params si tu backend los requiere, por ejemplo: { idColegio: '...' }
        const data = await gruposPorColegio();
        setGrupos(data);
      } catch (error) {
        console.error('Error al obtener grupos:', error);
        setGrupos([]);
      }
    };
    fetchGrupos();
  }, []);

  return (
    <div className="materias-page">
      <Navbar active="GRUPOS" />
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
              <span>＋</span> Crear grupo
            </button>
          </div>
        </div>

        <table className="materias-tabla">
          <thead>
            <tr>
              <th>Nombre Grupo</th>
              <th>Nivel</th>
              <th>Grado</th>
              <th>ID Colegio</th>
            </tr>
          </thead>
          <tbody>
            {grupos && grupos.length > 0 ? (
              grupos.map((grupo) => (
                <tr key={grupo.id}>
                  <td>{grupo.nombreGrupo}</td>
                  <td>{grupo.nivel}</td>
                  <td>{grupo.grado}</td>
                  <td>{grupo.idColegio}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No hay grupos disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>

      {mostrarModal && (
        <RegistrarGrupo
          onClose={() => setMostrarModal(false)}
          onMateriaAgregada={() => {
            // Recargar materias después de agregar
            setMostrarModal(false);
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default Grupo;
