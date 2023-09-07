var formulario = document.forms.formulario_vradelantadacp
var resultado = document.getElementById("for-vr-adelantadac")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.capitalizaciones.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let m = parseFloat(formulario.capitalizaciones.value)
    let j = parseFloat((formulario.interes.value)/100)
    let total = ((1+(j/m)**m)*(1+(j/m)**(m*n)-1)/(j/m)*(j/m)/((1+(j/m)**m)-1))*r

    resultado.innerHTML = total.toFixed(2)
}