//import axios from "axios";
//const urlBase = "http://localhost:3001/"

const usuario = [
    {
        id: "1",
        nombre: "Juan",
        usuario: "juan",
        contrasenia: "solarte"
    },
    {
        id: "2",
        nombre: "Pablo",
        usuario: "pablo",
        contrasenia: "hoyos"
    }
]

export async function iniciarSesion(nombreUsuario, contrasenia){
    //Llamando al servicio
    /*
    let res = await axios.get(urlBase + "iniciarSesion/" + nombreUsuario + "/" + contrasenia);
    if (res || res.id !== "0")
        return true;
    return false;   
    */
    let res = usuario.find((usuario) => usuario.usuario === nombreUsuario && usuario.contrasenia === contrasenia)
    if(res){
        localStorage.setItem("id", res.id)
        localStorage.setItem("nombre", res.nombre)
        return true
    }
    return false
}