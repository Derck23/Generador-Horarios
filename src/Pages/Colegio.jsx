import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/colegio.css';
import { FiEye, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import { getColegios } from '../services/colegioService'; // Importa el servicio para obtener colegios

const Colegios = () => {
  const [buscar, setBuscar] = useState('');
  const [colegios, setColegios] = useState([]);

  useEffect(() => {
    const fetchColegios = async () => {
      try {
        const response = await getColegios();
        // Asegúrate de acceder a la propiedad 'data' que contiene el array
        const colegiosArray = Array.isArray(response.data) ? response.data : [];
        setColegios(colegiosArray);
        console.log('Colegios obtenidos:', colegiosArray);
      } catch (error) {
        console.error('Error al obtener colegios:', error);
        setColegios([]);
      }
    };

    fetchColegios();
  }, []);

  const handleBuscar = () => {
  };

  return (
    <div className="colegios-page">
      <Navbar active="COLEGIOS" />
      <main className="colegios-main">

        <div className="colegios-controles">
          <div className="colegios-busqueda">
            <input
              type="text"
              placeholder="Buscar..."
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
            />
            <FiSearch className="colegios-icono-buscar" onClick={handleBuscar} />
          </div>
        </div>

        <table className="colegios-tabla">
          <thead>
            <tr>
              <th>ID Colegio</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {colegios.map((c) => (
              <tr key={c.idColegio}>
                <td>{c.idColegio}</td>
                <td>{c.nombreColegio}</td>
                <td>{c.direccion}</td>
                <td>{c.telefono}</td>
                <td>{c.email}</td>
                <td className="colegios-acciones">
                  <FiEye title="Ver" />
                  <FiEdit2 title="Editar" />
                  <FiTrash2 title="Eliminar" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export default Colegios;
