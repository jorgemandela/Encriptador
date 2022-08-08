function encriptar() {
  let encriptado = document
    .getElementById("areatexto")
    .value.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  if (encriptado == 0) {
    alert("El campo texto no puede estar vacio.");
  } 
  else if(/[^a-z ]/.test(encriptado)){
    alert("No se aceptan mayusculas o caracteres especiales.")
  } else {
    document.getElementById("salida").value = encriptado;
  }
  
  
}

const btnencriptar = document.getElementById("encriptar");
btnencriptar.onclick = encriptar;

/* Desencriptar */

function desencriptar() {
  let desencriptado = document
    .getElementById("areatexto")
    .value.replace(/enter/g, "e")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
    .replace(/imes/g, "i");
  document.getElementById("salida").value = desencriptado;
}

const btndesencriptar = document.getElementById("desencriptar");
btndesencriptar.onclick = desencriptar;


function copiar() {
  let copiarTexto = document.getElementById("salida").value;
  navigator.clipboard.writeText(copiarTexto).then(() => {
    if (copiarTexto.length === 0 || /^\s+$/.test(copiarTexto)) {
      alert("No hay texto que copiar");
    } else {
      alert("Su texto ha sido copiado al portapapeles");
    }
  });
}




/* Encriptar  usando un mapeo*/
// function encriptar(){
// let texto = document.getElementById('areatexto').value;
// let letras = {'a':'ai', 'e':'enter', 'i':'imes', 'o':'ober', 'u':'ufat'};
// let encriptado = texto.replace(/[a e i o u]/gi, m=> letras[m])
// document.getElementById('salida').value = encriptado;
// document.getElementById('areatexto');
// }

/*Desencriptar usando mapeo */
// function desencriptar() {
//     let texto = document.getElementById("areatexto").value;
//     let letras = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" };
//     let desencriptado = texto.replace(
//       /enter|ai|imes|ober|ufat/gi,
//       (m) => letras[m]
//     );
//     document.getElementById("salida").value = desencriptado;
//   }
