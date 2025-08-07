import '../../styles/horarioTable.css';
import html2pdf from 'html2pdf.js';

const DIAS = ["lunes", "martes", "miércoles", "jueves", "viernes"];
const HORAS = ["7:20-8:10", "8:10-9:00", "9:00-9:50", "9:50-10:00", "10:00-10:50", "10:50-11:40", "11:40-12:05", "12:05-12:55", "12:55-13:45", "13:45-14:30"];

const descargarPDF = (grupo) => {
  const element = document.querySelector(".horario-container");
  html2pdf().from(element).save(`horario-${grupo}.pdf`);
};

const renderCeldaHorario = (contenido, esHorarioProfesor = false) => {
  if (!contenido) return "-";
  
  if (contenido === "RECESO") {
    return <span style={{ color: 'orange', fontWeight: 'bold' }}>RECESO</span>;
  }
  
  if (typeof contenido === 'object') {
    return (
      <div className={esHorarioProfesor ? 'celda-profesor-destacada' : ''}>
        <b>{contenido.materiaNombre}</b>
        <br />
        <span style={{ fontSize: '0.9em' }}>{contenido.profesorNombre}</span>
        {esHorarioProfesor && (
          <div className="indicador-profesor">
          </div>
        )}
      </div>
    );
  }
  
  return contenido;
};

export const HorarioTable = ({ horario, grupo, horarioProfesor = null }) => {
  console.log("HorarioTable - horario recibido:", horario);
  console.log("HorarioTable - horarioProfesor recibido:", horarioProfesor);

  // Función para verificar si una celda específica pertenece al profesor
  const esCeldaDelProfesor = (dia, horaIndex) => {
    if (!horarioProfesor) return false;
    
    const materiasDelDia = horarioProfesor[dia];
    if (!materiasDelDia || !Array.isArray(materiasDelDia)) return false;
    
    // Buscar si alguna materia del profesor está en este índice de hora
    return materiasDelDia.some(materia => 
      materia && typeof materia === 'object' && materia.indiceHora === horaIndex
    );
  };

  // Función para obtener la materia del profesor en una hora específica
  const getMateriaProfesorEnHora = (dia, horaIndex) => {
    if (!horarioProfesor) return null;
    
    const materiasDelDia = horarioProfesor[dia];
    if (!materiasDelDia || !Array.isArray(materiasDelDia)) return null;
    
    return materiasDelDia.find(materia => 
      materia && typeof materia === 'object' && materia.indiceHora === horaIndex
    );
  };

  // Función para obtener el contenido de la celda
  const getContenidoCelda = (dia, horaIndex) => {
    // Si hay horario del profesor, solo mostrar sus materias
    if (horarioProfesor) {
      const esDelProfesor = esCeldaDelProfesor(dia, horaIndex);
      if (esDelProfesor) {
        return getMateriaProfesorEnHora(dia, horaIndex);
      } else {
        // Verificar si es RECESO en el horario general
        const celdaGeneral = horario[dia]?.[horaIndex];
        if (celdaGeneral === "RECESO") {
          return "RECESO";
        }
        // Para cualquier otra cosa (materias de otros profesores), mostrar vacío
        return null;
      }
    }
    
    // Si no hay horario del profesor, mostrar el horario completo (modo admin)
    return horario[dia]?.[horaIndex];
  };

  return (
    <div className="horario-container">
      <h2 className="horario-titulo">
        {horarioProfesor ? `Tu Horario - Grupo ${grupo}` : `Horario del grupo ${grupo}`}
      </h2>
      {horarioProfesor && (
        <div className="horario-info-profesor">
          <p className="horario-subtitulo">
            Solo se muestran tus materias y los recreos
          </p>
          <div className="resumen-profesor">
            <h4>Resumen de tu horario:</h4>
            {Object.keys(horarioProfesor).map(dia => (
              <div key={dia} className="dia-resumen">
                <strong>{dia.charAt(0).toUpperCase() + dia.slice(1)}:</strong>
                {horarioProfesor[dia].map((materia, idx) => (
                  <span key={idx} className="materia-resumen">
                    {HORAS[materia.indiceHora]} - {materia.materiaNombre}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="horario-tabla-scroll">
        <table className="horario-tabla">
          <thead>
            <tr>
              <th>Hora</th>
              {DIAS.map(dia => <th key={dia}>{dia}</th>)}
            </tr>
          </thead>
          <tbody>
            {HORAS.map((hora, idx) => {
              // Verificar si el profesor tiene clase en esta hora
              const profesorTieneClaseEnEstaHora = horarioProfesor && 
                DIAS.some(dia => esCeldaDelProfesor(dia, idx));

              return (
                <tr key={hora}>
                  <td className={profesorTieneClaseEnEstaHora ? 'hora-profesor-activa' : ''}>
                    {hora}
                  </td>
                  {DIAS.map(dia => {
                    const esDelProfesor = horarioProfesor && esCeldaDelProfesor(dia, idx);
                    const contenidoCelda = getContenidoCelda(dia, idx);
                    
                    return (
                      <td 
                        key={dia + hora}
                        className={esDelProfesor ? 'celda-profesor' : ''}
                      >
                        {renderCeldaHorario(contenidoCelda, esDelProfesor)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button className="homeadmin-btn" onClick={() => descargarPDF(grupo)}>
        Descargar Horario
      </button>
    </div>
  );
};

export default HorarioTable;