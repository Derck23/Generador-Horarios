import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/horario.css';
import { FiEye, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import GenerarHorario from '../Components/Modal/GenerarHorario';
import { getHorarios } from '../services/horario';
import HorarioTable from '../Components/Modal/HorarioTable';

const Horario = () => {
  const [buscar, setBuscar] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [horarios, setHorarios] = useState([]);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);

  useEffect(() => {
    const fetchHorarios = async () => {
      try {
        const res = await getHorarios();
        setHorarios(res.data); // Ajusta aquí según tu backend
      } catch (error) {
        setHorarios([]);
      }
    };
    fetchHorarios();
  }, []);

  const handleBuscar = () => {
    const resultados = horarios.filter(h => h.grupo.toLowerCase().includes(buscar.toLowerCase()));
    setHorarios(resultados);
  };

  const handleVerHorario = (horario) => {
    setHorarioSeleccionado(horario);
  };

  const handleCerrarHorario = () => {
    setHorarioSeleccionado(null);
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
            onClick={() => setMostrarModal(true)}
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
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {horarios.map((h) => (
              <tr key={h.id}>
                <td>{h.id}</td>
                <td>{h.grupo}</td>
                <td>{new Date(h.Creado).toLocaleString()}</td>
                <td className="horarios-acciones">
                  <button
                    className="ver-horario-btn"
                    onClick={() => handleVerHorario(h)}
                  >
                    <FiEye title="Ver horario" /> Ver horario
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal o sección para mostrar el horario completo */}
        {/* 
        {horarioSeleccionado && (
          <div className="modal-overlay">
            <div className="crearcolegio-container">
              <div className="crearcolegio-card">
                <h2 className="crearcolegio-title">Horario de {horarioSeleccionado.grupo}</h2>
                <button className="crearcolegio-btn" onClick={handleCerrarHorario}>Cerrar</button>
                <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
                  <table className="horario-detalle-tabla">
                    <thead>
                      <tr>
                        <th>Día</th>
                        <th>Clases</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(horarioSeleccionado.horario).map(([dia, clases]) => (
                        <tr key={dia}>
                          <td style={{ fontWeight: 'bold' }}>{dia.charAt(0).toUpperCase() + dia.slice(1)}</td>
                          <td>
                            {clases.map((clase, idx) => (
                              <div key={idx} style={{ marginBottom: '4px' }}>
                                {clase === null && <span>---</span>}
                                {clase === "RECESO" && <span style={{ color: 'orange', fontWeight: 'bold' }}>RECESO</span>}
                                {typeof clase === 'object' && clase !== null && (
                                  <span>
                                    <b>{clase.materiaNombre}</b> <br />
                                    <span style={{ fontSize: '0.9em' }}>{clase.profesorNombre}</span>
                                  </span>
                                )}
                              </div>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
        */}

        {/* Usar HorarioTable para mostrar el horario seleccionado */}
        {horarioSeleccionado && (
          <div className="modal-overlay">
            <div className="modal-horario-container">
              <HorarioTable
                horario={horarioSeleccionado.horario}
                grupo={horarioSeleccionado.grupo}
              />
              <button 
                className="modal-close-btn" 
                onClick={handleCerrarHorario}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

        {mostrarModal && (
          <GenerarHorario
            onClose={() => setMostrarModal(false)}
            onHorarioCreado={() => setMostrarModal(false)}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Horario;
