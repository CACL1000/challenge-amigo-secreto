// Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

function agregarAmigo() {
  let inputNombre = document.getElementById("amigo");
  let nombre = inputNombre.value.trim(); // Trim para eliminar espacios en blanco al inicio y final

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  listaDeAmigos.push(nombre);
  actualizarListaAmigos();
  inputNombre.value = "";
}

function actualizarListaAmigos() {
  let listaHTML = document.getElementById("listaAmigos");
  listaHTML.innerHTML = ""; // Limpiar la lista antes de actualizar

  // Recorrer el array y agregar cada nombre a la lista en el HTML
  listaDeAmigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaHTML.appendChild(li);
  });
}

function sortearAmigo() {

  if (listaDeAmigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }

  //generar indice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

  //obtener amigo sorteado  
  let amigoSorteado = listaDeAmigos[indiceAleatorio];
  console.log("Amigo sorteado: ", amigoSorteado);

  //mostar resultado en la pagina
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
