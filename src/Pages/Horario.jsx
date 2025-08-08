import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/horario.css';
import { FiEye, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import GenerarHorario from '../Components/Modal/GenerarHorario';
import { getHorarios, obtenerHorarioPorProfesor } from '../services/horario';
import HorarioTable from '../Components/Modal/HorarioTable';

const Horario = () => {
  const [buscar, setBuscar] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [horarios, setHorarios] = useState([]);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [esProfesor, setEsProfesor] = useState(false);
  const [horariosProfesor, setHorariosProfesor] = useState([]); // Datos específicos del profesor

  useEffect(() => {
    const fetchHorarios = async () => {
      console.log("useEffect ejecutado");
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("Usuario desde localStorage:", user);
        if (!user) return;        
        if (user?.rol === "maestro") {
          console.log("El usuario es maestro, llamando obtenerHorarioProfesor...");
          setEsProfesor(true);
          
          // Obtener horarios específicos del profesor
          const resProfesor = await obtenerHorarioPorProfesor(user.id);
          console.log("Respuesta obtenerHorarioProfesor:", resProfesor);
          setHorariosProfesor(resProfesor.data);
          
          // También obtener todos los horarios para mostrar la estructura completa
          const resTodosHorarios = await getHorarios();
          setHorarios(resTodosHorarios.data);
        } else {
          setEsProfesor(false);
          const res = await getHorarios();
          setHorarios(res.data);
        }
      } catch (error) {
        console.error(error);
        setHorarios([]);
        setHorariosProfesor([]);
      }
    };
    fetchHorarios();
  }, []);

  const handleBuscar = () => {
    const resultados = horarios.filter(h => h.grupo.toLowerCase().includes(buscar.toLowerCase()));
    setHorarios(resultados);
  };

  const handleVerHorario = (horario) => {
    console.log("Ver horario seleccionado:", horario);
    
    // Si es profesor, buscar el horario específico del profesor para este grupo
    let horarioProfesorParaGrupo = null;
    if (esProfesor) {
      horarioProfesorParaGrupo = horariosProfesor.find(hp => 
        hp.grupoId === horario.horarioGrupoId || hp.grupo === horario.grupo
      );
      console.log("Horario del profesor para este grupo:", horarioProfesorParaGrupo);
    }
    
    setHorarioSeleccionado({
      ...horario,
      horarioProfesor: horarioProfesorParaGrupo?.horario || null
    });
  };

  const handleCerrarHorario = () => {
    setHorarioSeleccionado(null);
  };

  // Filtrar horarios para mostrar solo los que tienen clases del profesor (si es profesor)
  const horariosParaMostrar = esProfesor 
    ? horarios.filter(h => 
        horariosProfesor.some(hp => 
          hp.grupoId === h.horarioGrupoId || hp.grupo === h.grupo
        )
      )
    : horarios;

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
          {!esProfesor && (
            <button
              className="profesores-boton"
              onClick={() => setMostrarModal(true)}
            >
              <span>＋</span> Crear horario
            </button>
          )}
        </div>

        {esProfesor && (
          <div className="info-profesor">
            <h3>Tus Horarios</h3>
            <p>Mostrando solo los grupos donde tienes materias asignadas</p>
          </div>
        )}

        <table className="horarios-tabla">
          <thead>
            <tr>
              <th>No. de Horario</th>
              <th>Grupo</th>
              <th>Fecha de creación</th>
              {esProfesor && <th>Tus Materias</th>}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {horariosParaMostrar.map((h) => {
              const horarioProfesorInfo = esProfesor 
                ? horariosProfesor.find(hp => hp.grupoId === h.horarioGrupoId || hp.grupo === h.grupo)
                : null;

              return (
                <tr key={h.id}>
                  <td>{h.id}</td>
                  <td>{h.grupo}</td>
                  <td>{new Date(h.Creado).toLocaleString()}</td>
                  {esProfesor && (
                    <td>
                      {horarioProfesorInfo && (
                        <div className="materias-profesor-preview">
                          {Object.keys(horarioProfesorInfo.horario).map(dia => (
                            <span key={dia} className="dia-preview">
                              {dia}: {horarioProfesorInfo.horario[dia].length} clase(s)
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                  )}
                  <td className="horarios-acciones">
                    <button
                      className="ver-horario-btn"
                      onClick={() => handleVerHorario(h)}
                    >
                      <FiEye title="Ver horario" /> Ver horario
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Usar HorarioTable para mostrar el horario seleccionado */}
        {horarioSeleccionado && (
          <div className="modal-overlay">
            <div className="modal-horario-container">
              <HorarioTable
                horario={horarioSeleccionado.horario}
                grupo={horarioSeleccionado.grupo}
                horarioProfesor={horarioSeleccionado.horarioProfesor}
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

        {mostrarModal && !esProfesor && (
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