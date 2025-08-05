import api from "./api";

export const crearHorario = async (data) => {
  try {
    const response = await api.post("/horario/crear", data);
    return response.data;
  } catch (error) {
    console.error("Error al crear horario:", error);
    throw error;
  }
};

export const getHorarios = async () => {
  try {
    const response = await api.get("/horario/listar");
    return response.data;
  } catch (error) {
    console.error("Error al obtener horarios:", error);
    throw error;
  }
};

export const obtenerHorario = async (grupoId) => {
  const res = await api.get(`/horario/${grupoId}`);
  if (!res.ok) throw new Error("No se pudo obtener el horario");
  return await res.json();
};

export const obtenerHorarioProfesor = async () => {
  const token = localStorage.getItem("token");
  const res = await api.get(`/horario/profesor`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const text = await res.text();  // Lee el texto completo (sin parsear)
  console.log("Respuesta cruda de obtenerHorarioProfesor:", text);

  if (!res.ok) {
    throw new Error("No se pudo obtener el horario del profesor");
  }

  const data = JSON.parse(text);  // Ahora parsea a JSON
  console.log("Horario del profesor recibido:", data);
  return data;
}

