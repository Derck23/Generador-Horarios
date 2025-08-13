import api from "./api";

export const registrarProfesor = async (data) => {
  try {
    const response = await api.post("/profesor/registrar", data);
    return response.data;
  } catch (error) {
    console.error("Error al registrar profesor:", error);
    throw error;
  }
};

export const listarProfesores = async () => {
  try {
    const response = await api.get("/profesor/listar");
    return response.data;
  } catch (error) {
    console.error("Error al listar profesores:", error);
    throw error;
  }
};

export const asignarProfesor = async (data) => {
  try {
    const response = await api.post("/profesor/asignacion", data);
    return response.data;
  } catch (error) {
    console.error("Error en la asignación de profesor:", error);
    throw error;
    }
}

export const eliminarProfesor = async (profesorId) => {
  try {
    const response = await api.delete(`/profesor/eliminar/${profesorId}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar profesor:", error);
    throw error;
  }
};