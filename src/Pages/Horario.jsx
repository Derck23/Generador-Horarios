import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/horario.css';
import { FiEye, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import GenerarHorario from '../Components/Modal/GenerarHorario';
import { getHorarios } from '../services/horario'; // Asegúrate de importar el servicio correcto

const Horario = () => {
  const [buscar, setBuscar] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false); // Estado para la modal
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    const fetchHorarios = async () => {
      try {
        const data = await getHorarios();
        setHorarios(data); // Ajusta según la estructura de tu backend
      } catch (error) {
        console.error("Error al obtener horarios:", error);
        setHorarios([]);
      }
    };
    fetchHorarios();
  }, []);

  const handleBuscar = () => {
    // Lógica para buscar horarios
    const resultados = horarios.filter(h => h.grupo.toLowerCase().includes(buscar.toLowerCase()));
    setHorarios(resultados);
    
  };

  return (
    <div className="horarios-page">
      <Navbar active="HORARIOS" />
      <main className="horarios-main">

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
          <button
            className="profesores-boton"
            onClick={() => setMostrarModal(true)} // Abrir modal al hacer click
          >
            <span>＋</span> Crear horario
          </button>
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
      {mostrarModal && (
        <GenerarHorario
          onClose={() => setMostrarModal(false)}
          onHorarioCreado={() => setMostrarModal(false)}
        />
      )}
      <Footer />
    </div>
  );
};

export default Horario;
