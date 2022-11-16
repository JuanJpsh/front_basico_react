import axios from "axios";
const urlBase = "http://localhost:3001/api/prod";

export async function productosUsuario(idUsuario) {
  let res = await axios.get(urlBase + `/${idUsuario}`);
  return res.data;
}
