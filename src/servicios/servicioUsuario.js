import axios from "axios";
const urlBase = "http://localhost:3001/api/user";

export async function iniciarSesion(nombreUsuario, contrasenia) {
  let res = await axios.get(
    urlBase + "/login/" + nombreUsuario + "/" + contrasenia
  );
  if (res.data || res.data._id !== "0") {
    localStorage.setItem("id", res.data._id);
    localStorage.setItem("nombre", res.data.nombre);
    return true;
  }
  return false;
}
