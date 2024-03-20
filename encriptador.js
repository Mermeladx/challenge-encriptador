function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

function encriptarTexto() {
    var textarea = document.getElementById("textoEntrada");
    var texto = textarea.value.trim();
    var textoEncriptado = encriptar(texto);
    if (texto !== "") {
        document.querySelector(".text1").textContent = textoEncriptado;
        mostrarBotonCopiar();
    } else {
        document.querySelector(".text1").textContent = "Ningún mensaje fue encontrado";
    }
}

function desencriptarTexto() {
    var textarea = document.getElementById("textoEntrada");
    var texto = textarea.value.trim();
    var textoDesencriptado = desencriptar(texto);
    if (texto !== "") {
        document.querySelector(".text1").textContent = textoDesencriptado;
        mostrarBotonCopiar();
    } else {
        document.querySelector(".text1").textContent = "Ningún mensaje fue encontrado";
    }
}

function mostrarBotonCopiar() {
var botonCopiar = document.querySelector('.but-copy');
var textarea = document.getElementById("textoEntrada");
if (textarea.value.trim() !== '') {
botonCopiar.style.display = 'block';
} else {
botonCopiar.style.display = 'none';
}
}
    
   // var botonCopiar = document.querySelector('.but-copy');
   // botonCopiar.style.display = 'none'; // Oculta el botón

   function copiarTexto() {
var textoCopiar = document.querySelector('.text1').textContent;
navigator.clipboard.writeText(textoCopiar);
}

function mostrarOcultarBotonCopiar() {
var textarea = document.getElementById("textoEntrada");
var botonCopiar = document.querySelector('.but-copy');
if (textarea.value.trim() !== '') {
botonCopiar.style.display = 'block';
} else {
botonCopiar.style.display = 'none';
}
}

var botonCopiar = document.querySelector('.but-copy');
botonCopiar.style.display = 'none'; // Oculta el botón