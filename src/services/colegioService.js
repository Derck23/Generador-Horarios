import api from "./api";

export const crearColegio = async (data) => {
  try {
    const response = await api.post("/colegio/registrar", data);
    return response.data;
  } catch (error) {
    console.error("Error al crear colegio:", error);
    throw error;
  }
};

export const getColegios = async () => {
  try {
    const response = await api.get("/colegio/listar");
    return response.data;
  } catch (error) {
    console.error("Error al obtener colegios:", error);
    throw error;
  }
};

export const registrarGrupo = async (data) => {
  try {
    const response = await api.post("/colegio/registrarGrupo", data);
    return response.data;
  } catch (error) {
    console.error("Error al registrar grupo:", error);
    throw error;
  }
};

export const gruposPorColegio = async (params) => {
  try {
    const response = await api.get("/colegio/gruposLista", { params });
    return response.data.data; // El array de grupos está en data.data
  } catch (error) {
    console.error("Error al obtener grupos por colegio:", error);
    throw error;
  }
};

export const registrarMateria = async (data) => {
  try {
    const response = await api.post("/colegio/materiaRegistrar", data);
    return response.data;
  } catch (error) {
    console.error("Error al registrar materia:", error);
    throw error;
  }
};

export const obtenerMaterias = async () => {
  try {
    const response = await api.get("/colegio/materias");
    return response.data.data; // El array de materias está en data.data
  } catch (error) {
    console.error("Error al obtener materias:", error);
    throw error;
  }
};

export const eliminarMateria = async (materiaId) => {
  try {
    const response = await api.delete(`/colegio/materia/eliminar/${materiaId}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar materia:", error);
    throw error;
  }
};

export const eliminarGrupo = async (grupoId) => {
  try {
    const response = await api.delete(`/colegio/grupo/eliminar/${grupoId}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar grupo:", error);
    throw error;
  }
};
