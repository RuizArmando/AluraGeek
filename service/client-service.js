//Devuelve todos los videojuegos
const listVideoGame = () => fetch("https://fake-api-silk.vercel.app/videogame").then((respuesta) => respuesta.json());

//Devuelve todos los usuarios
const listUsuario = () => fetch("https://fake-api-silk.vercel.app/usuario").then((respuesta) => respuesta.json());

//Agrega un nuevo vidiojuego a la db
const addVideoGame = (nombre, precio, imagen, categoria, descripcion, codigo) => {
  return fetch("https://fake-api-silk.vercel.app/videogame", {
    method: "POST",
    headers:{
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({nombre, precio, imagen, categoria, descripcion, codigo, id: uuid.v4() }),
  });
};

//Borra el videojuego
const deleteVideoGame = (id) =>{
  return fetch(`https://fake-api-silk.vercel.app/videogame/${id}`,{
    method: "DELETE",
  });
};

//Consultar vidiojuego
const detalleVideogame = (id) => {
  return fetch(`https://fake-api-silk.vercel.app/videogame/${id}`).then((respuesta) => respuesta.json());
};

//Consultar vidiojuego
const buscarVideogame = (nombre) => {
  return fetch(`https://fake-api-silk.vercel.app/videogame/${nombre}`).then((respuesta) => respuesta.json());
};

//Actualizar videojuego
const actualizarVideojuego = (nombre, precio, imagen, categoria, descripcion, codigo, id) => {
  return fetch(`https://fake-api-silk.vercel.app/videogame/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({nombre, precio, imagen, categoria, descripcion, codigo}),
  }).then((respuesta) => respuesta).catch((err) => console.log(err));
};

export const clientServices = {
  listVideoGame,
  listUsuario,
  addVideoGame,
  deleteVideoGame,
  detalleVideogame,
  actualizarVideojuego,
  buscarVideogame
};

/*
,
    {
      "nombre": "Fornite",
      "precio": "0",
      "imagen": "../assets/img/fortnite.jpg",
      "categoria": "Juego gratuito",
      "descripcion": "Juego shooter",
      "codigo": "0",
      "id": "e23fb5a0-d446-4082-8b98-93d7ec4a5d4b"
    }
*/