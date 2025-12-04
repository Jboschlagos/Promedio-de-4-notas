alert("A continuación ingresa tus notas para calcular su promedio");

var nota1 = parseFloat(prompt("Ingrese nota 1"));
var nota2 = parseFloat(prompt("Ingrese nota 2"));
var nota3 = parseFloat(prompt("Ingrese nota 3"));
var nota4 = parseFloat(prompt("Ingrese nota 4"));

var promedio = (nota1 + nota2 + nota3 + nota4) / 4;

const resultado = document.getElementById("resultado");

if (promedio >= 6 && promedio <= 7) {
    resultado.textContent = `Excelente!! Tienes promedio ${promedio.toFixed(2)}`;
    resultado.style.color = "green";
    resultado.style.background = "yellow";

} else if (promedio < 6 && promedio >= 5) {
    resultado.textContent = `Tienes promedio ${promedio.toFixed(1)}. Sigue adelante, puedes mejorar`;
    resultado.style.color = "blue";

} else if (promedio < 5 && promedio >= 4) {
    resultado.textContent = `Tienes promedio ${promedio.toFixed(1)}. Esfuérzate más`;
    resultado.style.color = "orange";
    console.log("Necesitas mejorar tus notas");

} else if (promedio < 4 && promedio >= 1) {
    resultado.textContent = `Tienes promedio ${promedio.toFixed(1)}. Lamentablemente has perdido el año`;
    resultado.style.color = "red";
    alert("Debes repetir el año escolar");

} else {
    resultado.textContent = "Valor no válido";
    resultado.style.color = "black";
    resultado.style.background = "none";
}
