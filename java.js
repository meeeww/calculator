let array = [];
let numero;
let numero2;
let contador = 0;
let operacion;
let resultado;

function borrarResultados() {
  numero = 0;
  numero2 = 0;
  contador = 0;
  operacion = "";
  resultado = 0;
  array = [];
}

function borrarPantalla() {
  numero = 0;
  numero2 = 0;
  contador = 0;
  operacion = "";
  resultadoHTML = document.querySelector(".resultado");
  resultadoHTML.innerHTML = 0;
}

function agregarNumero(numero) {
  resultado = document.querySelector(".resultado");
  array[contador] = numero;
  contador++;
  resultado.innerHTML = array;
}

function operador(p_operacion) {
  numero = convertirNumero();
  contador = 0;
  operacion = p_operacion;
  array = [];
}

function convertirNumero() {
  numero = Number(array.join(""));
  return numero;
}

function calcularResultado() {
  switch (operacion) {
    case "sumar":
      let suma = numero + (numero2 = convertirNumero());
      resultado.innerHTML = suma;
      borrarResultados();
      break;
    case "restar":
      let resta = numero - (numero2 = convertirNumero());
      resultado.innerHTML = resta;
      borrarResultados();
      break;
    case "dividir":
      let division = numero / (numero2 = convertirNumero());
      resultado.innerHTML = division;
      borrarResultados();
      break;
    case "multiplicar":
      let multiplicacion = numero * (numero2 = convertirNumero());
      resultado.innerHTML = multiplicacion;
      borrarResultados();
      break;
    default:
      break;
  }
}
