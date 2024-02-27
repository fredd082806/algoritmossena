function saludo() {
  alert("Bienvenido");
}

function suma() {
  // declaramos las variables necesarias
  let a = 0;
  let b = 0;
  let sum = 0;
  // solicitamos los valores y los asignamos en las variables
  a = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
  b = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));
  // realizamos la operacion necesaria
  s = a + b;
  // mostramos el resutlado en pantalla

  alert("El resultado de la suma es " + s);
  console.log("El resultado de la suma es " + s);
}

function opBasicas() {
  // declaramos las variables necesarias
  let a = 0;
  let b = 0;
  let s = 0;
  let rest = 0;
  let mult = 0;
  let div = 0;

  // solicitamos los valores y los asignamos en las variables
  a = parseInt(prompt("Por favor ingrese el primer valor"));
  b = parseInt(prompt("Por favor ingrese el segundo valor"));
  // realizamos la operación necesaria
  s = a + b;
  rest = a - b;
  mult = a * b;
  div = a / b;
  // mostramos el resultado en pantalla

  alert("El resultado de la suma es " + s);
  alert("El resultado de la resta es " + rest);
  alert("El resultado de la multiplicación es " + mult);
  alert("El resultado de la division es " + div);

  console.log("El resultado de la suma es " + s);
  console.log("El resultado de la suma es " + rest);
  console.log("El resultado de la suma es " + mult);
  console.log("El resultado de la suma es " + div);
}

// conversion de medidas

function convertirMetrosAPulgadasYCentimetros() {
  // Solicitar al usuario que ingrese la longitud en metros
  let longitudMetros = parseFloat(prompt("Ingrese la longitud en metros:"));

  // Verificar si el valor ingresado es válido
  if (isNaN(longitudMetros) || longitudMetros < 0) {
    alert("Por favor, ingrese una longitud válida en metros.");
    return;
  }

  // Convertir metros a pulgadas (1 metro = 39.37 pulgadas)
  let pulgadas = longitudMetros * 39.37;

  // Convertir metros a centímetros (1 metro = 100 centímetros)
  let centimetros = longitudMetros * 100;

  // Mostrar los resultados como mensajes de alerta
  alert(
    longitudMetros +
      " metros equivalen a " +
      pulgadas.toFixed(2) +
      " pulgadas y " +
      centimetros.toFixed(2) +
      " centímetros."
  );
}

// Elevar al cuadrado

function elevarAlCuadrado() {
  // Solicitar al usuario que ingrese un número
  let numero = parseInt(prompt("Ingrese un número:"));

  // Verificar si el valor ingresado es válido
  if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
    return;
  }

  // Calcular el cuadrado del número
  let cuadrado = numero * numero;

  // Mostrar el resultado como un mensaje de alerta
  alert("El cuadrado de " + numero + " es: " + cuadrado);
}

// Encontrar el mayor numero
function encontrarNumeroMayor() {
  // Solicitar al usuario que ingrese dos números
  let numero1 = parseFloat(prompt("Ingrese el primer número:"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

  // Verificar si los valores ingresados son números válidos
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, ingrese números válidos.");
    return;
  }

  // Comparar los números para encontrar el mayor
  let mayor;
  if (numero1 > numero2) {
    mayor = numero1;
  } else if (numero2 > numero1) {
    mayor = numero2;
  } else {
    alert("Los números son iguales, no sea pato");
    return;
  }
  // Mostrar el número mayor como un mensaje de alerta
  alert("El número mayor es: " + mayor);
}

// Calculo del area de un triangulo

function calcularAreaTriangulo() {
  // Solicitar al usuario que ingrese la base y la altura del triángulo
  let base = parseFloat(
    prompt("Ingrese la longitud de la base del triángulo:")
  );
  let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

  // Verificar si los valores ingresados son números válidos
  if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    alert(
      "Por favor, ingrese valores válidos para la base y la altura del triángulo."
    );
    return;
  }
  // Calcular el área del triángulo (Área = base * altura / 2)
  let area = (base * altura) / 2;
  // Mostrar el área del triángulo como un mensaje de alerta
  alert("El área del triángulo es: " + area);
}

// el menor de los 3 numeros

function encontrarNumeroMenor() {
  // Solicitar al usuario que ingrese tres números
  let numero1 = parseFloat(prompt("Ingrese el primer número:"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

  // Verificar si los valores ingresados son números válidos
  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Por favor, ingrese números válidos.");
    return;
  }

  // Identificar el número menor
  let menor = numero1; // Suponemos que el primer número es el menor inicialmente
  if (numero2 < menor) {
    menor = numero2;
  }
  if (numero3 < menor) {
    menor = numero3;
  }

  // Mostrar el número menor como un mensaje de alerta
  alert("El número menor es el: " + menor);
}

// rendimiento de cdt

function calcularRendimiento() {
  // Solicitar al usuario que ingrese el monto o capital, la tasa de interés y el periodo en años
  let capital = parseFloat(prompt("Ingrese el monto o capital inicial:"));
  let tasaInteres = parseFloat(
    prompt("Ingrese la tasa de interés (en decimales):")
  );
  let periodo = parseFloat(prompt("Ingrese el periodo en años:"));

  // Verificar si los valores ingresados son números válidos
  if (
    isNaN(capital) ||
    isNaN(tasaInteres) ||
    isNaN(periodo) ||
    capital <= 0 ||
    tasaInteres <= 0 ||
    periodo <= 0
  ) {
    alert(
      "Por favor, ingrese valores válidos para el monto, la tasa de interés y el periodo."
    );
    return;
  }

  // Calcular el rendimiento por intereses (R = P * r * n)
  let rendimientoIntereses = capital * tasaInteres * periodo;

  // Calcular el capital al final del periodo (C = P + R)
  let capitalFinal = capital + rendimientoIntereses;

  // Mostrar el rendimiento por intereses y el capital final como mensajes de alerta
  alert(
    "El rendimiento por intereses es: " +
      rendimientoIntereses.toFixed(2) +
      "El capital final al final del periodo es: " +
      capitalFinal.toFixed(2)
  );
}

// año de nacimiento

function calcularAnoNacimiento() {
  // Solicitar al usuario que ingrese su edad
  let edad = parseInt(prompt("Ingrese su edad:"));

  // Obtener el año actual
  let anioActual = new Date().getFullYear();

  // Calcular el año de nacimiento
  let anoNacimiento = anioActual - edad;

  // Mostrar el año de nacimiento como un mensaje de alerta
  alert("Su año de nacimiento es: " + anoNacimiento);
}

// Saber si un numero es par o impar

function identificarParImpar() {
  // Solicitar al usuario que ingrese un número
  let numero = parseInt(prompt("Ingrese un número:"));

  // Verificar si el número ingresado es válido
  if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
    return;
  }

  // Identificar si el número es par o impar
  if (numero % 2 === 0) {
    alert("El número " + numero + " es par.");
  } else {
    alert("El número " + numero + " es impar.");
  }
}

// Promedio de 7 notas :

function calcularPromedioEstudiante() {
  let totalNotas = 7;
  let sumaNotas = 0;

  // Solicitar al usuario que ingrese las 7 notas
  for (let i = 1; i <= totalNotas; i++) {
    let nota = parseInt(prompt("Ingrese la nota " + i + ":"));
    // Verificar si la nota ingresada es válida
    if (isNaN(nota)) {
      alert("Por favor, ingrese una nota válida.");
      return;
    }
    sumaNotas += nota;
  }
  // Calcular el promedio
  let promedio = sumaNotas / totalNotas;

  // Mostrar el promedio como un mensaje de alerta
  alert("El promedio de las 7 notas es: " + promedio.toFixed(2));
}

// FRUTERIA EL EJERCICIO MAS LARGO :
function ejercicioLargo() {
  let p, d, pr, k, tp;
  let fr;

  p = 0;
  d = 0;
  pr = 0;
  k = 0;
  tp = 0;

  fr = prompt("Escribe la fruta a comprar");
  k = parseFloat(prompt("Escribe la cantidad en kilos:"));
  p = parseFloat(prompt("Escribe el precio por kilo:"));

  switch (fr) {
    case "manzana":
      switch (true) {
        case k < 3:
          pr = k * p;
          d = pr * 0.02;
          tp = pr - d;
          break;
        case k < 6:
          pr = k * p;
          d = pr * 0.04;
          tp = pr - d;
          break;
        case k < 17:
          pr = k * p;
          d = pr * 0.1;
          tp = pr - d;
          break;
      }
      break;

    case "pera":
      switch (true) {
        case k < 3:
          pr = k * p;
          d = pr * 0.02;
          tp = pr - d;
          break;
        case k < 6:
          pr = k * p;
          d = pr * 0.04;
          tp = pr - d;
          break;
        case k < 17:
          pr = k * p;
          d = pr * 0.1;
          tp = pr - d;
          break;
      }
      break;

    case "sandia":
      switch (true) {
        case k < 3:
          pr = k * p;
          d = pr * 0.02;
          tp = pr - d;
          break;
        case k < 6:
          pr = k * p;
          d = pr * 0.04;
          tp = pr - d;
          break;
        case k < 17:
          pr = k * p;
          d = pr * 0.1;
          tp = pr - d;
          break;
      }
      break;

    default:
      alert(
        "La fruta ingresada no está disponible. Por favor, elija manzana, pera o sandía."
      );
      return; // Salir de la función si no se eligió una fruta válida
  }

  alert(
    "El valor del descuento es: $" +
      d.toFixed(2) +
      " pesos. El valor total a pagar es: $" +
      tp.toFixed(2) +
      " pesos"
  );
}
