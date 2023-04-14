/*Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. */

let input = document.getElementById("texto");

function encriptar(mensaje) {
    mensaje = mensaje.replaceAll('e', 'enter');
    mensaje = mensaje.replaceAll('i', 'imes');
    mensaje = mensaje.replaceAll('a', 'ai');
    mensaje = mensaje.replaceAll('o', 'ober');
    mensaje = mensaje.replaceAll('u', 'ufat');
    console.log(mensaje);
    document.getElementById("no-text-output").style.display = "none";
    document.getElementById("text-output").style.display = "block";
    document.getElementById("copy-button").style.display = "block";
    document.getElementById("texto-final").innerHTML = mensaje;
}

function desencriptar(mensaje) {
    mensaje = mensaje.replaceAll('enter', "e");
    mensaje = mensaje.replaceAll('imes', "i");
    mensaje = mensaje.replaceAll('ai', "a");
    mensaje = mensaje.replaceAll('ober', "o");
    mensaje = mensaje.replaceAll('ufat', "u");
    console.log(mensaje);
    document.getElementById("no-text-output").style.display = "none";
    document.getElementById("text-output").style.display = "block";
    document.getElementById("copy-button").style.display = "block";
    document.getElementById("texto-final").innerHTML = mensaje;
}

let text = document.getElementById('texto-final').innerHTML;
const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}