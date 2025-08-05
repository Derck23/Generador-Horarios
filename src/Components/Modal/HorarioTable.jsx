import '../../styles/horarioTable.css';
import html2pdf from 'html2pdf.js';

const DIAS = ["lunes", "martes", "miércoles", "jueves", "viernes"];
const HORAS = ["7:20-8:10", "8:10-9:00", "9:00-9:50", "9:50-10:00", "10:00-10:50", "10:50-11:40", "11:40-12:05", "12:05-12:55", "12:55-13:45", "13:45-14:30"];

const descargarPDF = (grupo) => {
  const element = document.querySelector(".horario-container");
  html2pdf().from(element).save(`horario-${grupo}.pdf`);
};

const renderCeldaHorario = (clase) => {
  if (!clase) return <span>---</span>;  // Sin clase en esa hora

  if (clase === "RECESO") {
    return <span style={{ color: 'orange', fontWeight: 'bold' }}>RECESO</span>;
  }

  if (typeof clase === 'object') {
    return (
      <div>
        <b>{clase.materiaNombre}</b><br />
        <small>{clase.profesorNombre}</small>
      </div>
    );
  }

  return <span>{clase}</span>; // Cualquier otro caso
};

const HorarioTable = ({ horario, grupo }) => {
  return (
    <div className="horario-container">
      <h2 className="horario-titulo">Horario del grupo {grupo}</h2>
      <div className="horario-tabla-scroll">
        <table className="horario-tabla">
          <thead>
            <tr>
              <th>Hora</th>
              {DIAS.map(dia => (
                <th key={dia}>{dia.charAt(0).toUpperCase() + dia.slice(1)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {HORAS.map((hora, index) => (
              <tr key={hora}>
                <td>{hora}</td>
                {DIAS.map(dia => {
                  // Extraer clase correspondiente a la hora 'index' del día 'dia'
                  // Puede que no exista el día o la hora
                  const clasesDia = horario[dia] || [];
                  const clase = clasesDia[index] || null;
                  return (
                    <td key={dia + hora}>
                      {renderCeldaHorario(clase)}
                    </td>
                  );
                })}
              </tr>
            ))}
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
