// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
////Crear un array vacío para guardar los nombres
function agregarAmigo() {
   let nombre = document.getElementById("amigo").value.trim();
     if (nombre === "") { 
        // Validacion que no esté vacío
        alert("Por favor, inserte un nombre.");// Mostrar mensaje de error
         return;
         // Salir de la función si no es válido
     }
      if (amigos.includes(nombre)) {
        alert("Ese nombre ya se encuentra agregado");
        return;
      }// Validar que no sea un nombre repetido
      amigos.push(nombre);
      // Agregar el nombre 
      document.getElementById("amigo").value = "";
      // Limpiar el cuadro de texto
      actualizarLista();
}

function actualizarLista() {
     let lista = document.getElementById("listaAmigos");
     //actualizar la lista en pantalla

      lista.innerHTML = ""; 
      // Limpiar lista actual
       for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() { 
    // Validar nombres
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue al menos un amigo.");
        return;
    }
     let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
     // Generar un index aleatorio
     let amigoSorteado = amigos[indiceAleatorio];
     // Obtener el nombre sorteado
      let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
// Mostrar el resultado en la lista de resultado
 amigos.splice(indiceAleatorio, 1);
 //Eliminar para que no vuelva a salir 

  actualizarLista();
}
// Actualizar la lista de amigos
