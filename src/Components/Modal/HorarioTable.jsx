import '../../styles/horarioTable.css';
import html2pdf from 'html2pdf.js';

const DIAS = ["lunes", "martes", "miércoles", "jueves", "viernes"];
const HORAS = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"];

const descargarPDF = (grupo) => {
  const element = document.querySelector(".horario-container");
  html2pdf().from(element).save(`horario-${grupo}.pdf`);
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
                    {horario[dia]?.[idx] || "-"}
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