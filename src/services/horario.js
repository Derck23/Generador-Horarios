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
  const res = await api.get(`/api/horario/${grupoId}`);
  if (!res.ok) throw new Error("No se pudo obtener el horario");
  return await res.json();
};

export const obtenerHorarioPorProfesor = async () => {
  const token = localStorage.getItem("token");
  console.log("Token a enviar:", token);

  if (!token) {
    throw new Error("Token no disponible. ¿Estás autenticado?");
  }

  try {
    const res = await api.get("/horario/profesor", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error al obtener horario:", error);
    throw error;
  }
};


