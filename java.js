let array = [];
let numero;
let numero2;
let contador = 0;
let operacion;
let resultado;

function borrarPantalla() {
  numero = 0;
  numero2 = 0;
  contador = 0;
  operacion = "";
  resultado = 0;
  array = [];
  resultado.innerHTML = 0;
  console.log(resultado.innerHTML);
}

function agregarNumero(numero) {
  resultado = document.querySelector(".resultado");
  array[contador] = numero;
  contador++;
  resultado.innerHTML = numero;
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
      borrarPantalla();
      break;
    case "restar":
      let resta = numero - (numero2 = convertirNumero());
      resultado.innerHTML = resta;
      borrarPantalla();
      break;
    case "dividir":
      let division = numero / (numero2 = convertirNumero());
      resultado.innerHTML = division;
      borrarPantalla();
      break;
    case "multiplicar":
      let multiplicacion = numero * (numero2 = convertirNumero());
      resultado.innerHTML = multiplicacion;
      borrarPantalla();
      break;
    default:
      break;
  }
}
