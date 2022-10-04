
const boton = document.querySelector("#cambiar")
const fondo = document.getElementById("fondo")
const texto = document.getElementById("texto")
const colores = ["rojo","azul","verde","amarillo","negro","morado","naranja"]
let azar = 0;

boton.addEventListener("click", () =>
    cambiarColor()
)

function cambiarColor(){
    azar = randomN()
    fondo.setAttribute("class", colores[azar])
    texto.innerHTML = "El color de fondo es: " + colores[azar];
}

function randomN(){
    return Math.floor(Math.random() * 7)
}