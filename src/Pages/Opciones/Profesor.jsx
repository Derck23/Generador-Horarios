import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../Home/Home.css';

const profesores = [
  {
    id: 1,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
  // Puedes duplicar este objeto para simular más filas
  {
    id: 2,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
  {
    id: 3,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
  {
    id: 4,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
  {
    id: 5,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
  {
    id: 6,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
  {
    id: 7,
    nombre: 'José Luis Hernández López',
    materias: ['Física', 'Química', 'Matemáticas'],
    grupos: ['3 A', '2 A', '1 B'],
    horas: '12 hrs por semana',
  },
];

const Profesor = () => (
  <div className="home-page">
    <Navbar active="PROFESORES" />
    <main className="home-main" style={{ alignItems: 'flex-start', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ margin: '32px 0 16px 0' }}>
          <div style={{ fontSize: '1.3rem', color: '#46687c', fontWeight: 500 }}>
            Colegio Nuevo Continente
          </div>
          <div style={{ color: '#6b8ca2', fontSize: '1rem' }}>
            Plantel Querétaro<br />
            Nivel: Secundaria
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Buscar..."
            style={{
              borderRadius: 12,
              border: 'none',
              padding: '6px 16px',
              outline: 'none',
              fontSize: 14,
              background: '#e3f0fa',
              color: '#46687c',
              marginRight: 8,
            }}
          />
          <span style={{ fontSize: 18, color: '#6b8ca2', alignSelf: 'center' }}>🔍</span>
          <button
            style={{
              marginLeft: 16,
              background: '#6b8ca2',
              color: '#fff',
              border: 'none',
              borderRadius: 20,
              padding: '7px 22px',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18 }}>＋</span> Crear profesor
          </button>
        </div>
        <table style={{
          width: '100%',
          background: 'white',
          borderRadius: 10,
          overflow: 'hidden',
          borderCollapse: 'separate',
          borderSpacing: 0,
          boxShadow: '0 2px 8px rgba(100,150,180,0.07)',
        }}>
          <thead>
            <tr style={{ background: '#6b8ca2', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '14px 18px' }}>Nombre</th>
              <th>Materias</th>
              <th>Grupos</th>
              <th>Hrs. de clase</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {profesores.map((p, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #b2cbe2', color: '#46687c' }}>
                <td style={{ padding: '12px 18px' }}>{p.nombre}</td>
                <td>
                  {p.materias.map((m, i) => (
                    <span key={i} style={{
                      border: '1px solid #6b8ca2',
                      borderRadius: 16,
                      padding: '2px 10px',
                      fontSize: 13,
                      background: '#e3f0fa',
                      marginRight: 6,
                      marginBottom: 2,
                      display: 'inline-block'
                    }}>{m}</span>
                  ))}
                </td>
                <td>
                  {p.grupos.map((g, i) => (
                    <span key={i} style={{
                      border: '1px solid #6b8ca2',
                      borderRadius: 16,
                      padding: '2px 10px',
                      fontSize: 13,
                      background: '#e3f0fa',
                      marginRight: 6,
                      marginBottom: 2,
                      display: 'inline-block'
                    }}>{g}</span>
                  ))}
                </td>
                <td>{p.horas}</td>
                <td>
                  <span title="Ver" style={{ marginRight: 12, cursor: 'pointer' }}>⏲️</span>
                  <span title="Editar" style={{ marginRight: 12, cursor: 'pointer' }}>✏️</span>
                  <span title="Eliminar" style={{ cursor: 'pointer' }}>🗑️</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
    <Footer />
  </div>
);

export default Profesor;