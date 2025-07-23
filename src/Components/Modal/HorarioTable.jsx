import '../../styles/horarioTable.css';
import html2pdf from 'html2pdf.js';

const DIAS = ["lunes", "martes", "miércoles", "jueves", "viernes"];
const HORAS = ["7:20-8:10", "8:10-9:00", "9:00-9:50", "9:50-10:00", "10:00-10:50", "10:50-11:40", "11:40-12:05", "12:05-12:55", "12:55-13:45", "13:45-14:30"];

const descargarPDF = (grupo) => {
  const element = document.querySelector(".horario-container");
  html2pdf().from(element).save(`horario-${grupo}.pdf`);
};

const renderCeldaHorario = (contenido) => {
  if (!contenido) return "-";
  
  if (contenido === "RECESO") {
    return <span style={{ color: 'orange', fontWeight: 'bold' }}>RECESO</span>;
  }
  
  if (typeof contenido === 'object') {
    return (
      <div>
        <b>{contenido.materiaNombre}</b>
        <br />
        <span style={{ fontSize: '0.9em' }}>{contenido.profesorNombre}</span>
      </div>
    );
  }
  
  return contenido;
};

export const HorarioTable = ({ horario, grupo }) => {
  return (
    <div className="horario-container">
      <h2 className="horario-titulo">Horario del grupo {grupo}</h2>
      <div className="horario-tabla-scroll">
        <table className="horario-tabla">
          <thead>
            <tr>
              <th>Hora</th>
              {DIAS.map(dia => <th key={dia}>{dia}</th>)}
            </tr>
          </thead>
          <tbody>
            {HORAS.map((hora, idx) => (
              <tr key={hora}>
                <td>{hora}</td>
                {DIAS.map(dia => (
                  <td key={dia + hora}>
                    {renderCeldaHorario(horario[dia]?.[idx])}
                  </td>
                ))}
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