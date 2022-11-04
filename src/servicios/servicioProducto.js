const productos = [
    {
        idUser: "1",
        id: "1",
        nombre: "manzana",
        precio: 5000
    },
    {
        idUser: "1",
        id: "2",
        nombre: "pera",
        precio: 6000
    },
    {
        idUser: "2",
        id: "3",
        nombre: "banano",
        precio: 7000
    }
]

export async function productosUsuario(idUsuario){
    //Llamando al servicio
    /*
    const res = await axios.get(urlBase + "iniciarSesion/" + usuario + "/" + contrasenia);
    if (res || res.id !== "0")
        return true;
    return false;   
    */ 
    return productos.filter((prod) => prod.idUser === idUsuario)
}