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
