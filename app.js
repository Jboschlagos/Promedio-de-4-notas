alert("A continuación ingresa tus notas para calcular su promedio");

var nota1 = parseFloat(window.prompt("Ingrese nota 1"));
var nota2 = parseFloat(window.prompt("Ingrese nota 2"));
var nota3 = parseFloat(window.prompt("Ingrese nota 3"));
var nota4 = parseFloat(window.prompt("Ingrese nota 4"));

var promedio = (nota1 + nota2 + nota3 + nota4) / 4;

if (promedio >= 6 && promedio <= 7) {
    const mensaje = "Excelente!! Tienes promedio " + promedio.toFixed(2);
    const resultado = document.getElementById("resultado");

    resultado.textContent = mensaje;
    resultado.style.color = "green"; 
    resultado.style.backgroundColor = "yellow";  
}
 else if (promedio < 6 && promedio >= 5) {
    document.write("Tienes promedio " + promedio.toFixed(1) + ". Sigue adelante, puedes mejorar");
} else if (promedio < 5 && promedio >= 4) {
    alert("Tienes promedio " + promedio.toFixed(1) + ". Esfuérzate más");
} else if (promedio < 3.9 && promedio >= 1) {
    console.log("Tienes promedio " + promedio.toFixed(1) + ". Lamentablemente has perdido el año, debes repetir");
} else {
    alert("Valor no válido");
}
