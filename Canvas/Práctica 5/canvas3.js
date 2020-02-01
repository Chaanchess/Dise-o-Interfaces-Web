/**
 * Usando la Api Canvas, crea una figura con stroke, haz un degradado dentro de la figura. Dale un nombre y colócalo debajo de la figura. Se valorará la original.
 * @author Francisco José Sánchez Romero
 */

function cargaContextoCanvas(idcanvas) {
    //Recibimos el elemento canvas
    let canvas = document.getElementById(idcanvas);
    if (canvas && canvas.getContext) {
        //Acceder al contexto en 2d
        let contexto = canvas.getContext("2d");
        if (contexto) {
            return contexto;
        }

    }
    return false;

}

let contexto;
function estrella(){
    let lineGrad = contexto.createLinearGradient(150, 25, 150, 250);
    lineGrad.addColorStop(0, generaColores());
    lineGrad.addColorStop(0.1, generaColores());
    lineGrad.addColorStop(0.3, generaColores());
    lineGrad.addColorStop(0.5, generaColores());
    lineGrad.addColorStop(0.7, generaColores());
    lineGrad.addColorStop(0.9, generaColores());
    lineGrad.addColorStop(1, generaColores());
    contexto.fillStyle = lineGrad;
    contexto.strokeStyle="black";
    contexto.beginPath();
    contexto.moveTo(108, 0);
    contexto.lineTo(141, 70);
    contexto.lineTo(218, 78.3);
    contexto.lineTo(162, 131);
    contexto.lineTo(175, 205);
    contexto.lineTo(108, 170);
    contexto.lineTo(41.2, 205);
    contexto.lineTo(55, 131);
    contexto.lineTo(1, 78);
    contexto.lineTo(75, 68);
    contexto.lineTo(108, 0);
    contexto.closePath();
    contexto.fill();
}
function aleatorio(inferior, superior) {
    let numProbab = superior - inferior;
    let random = Math.random() * numProbab;
    return parseInt(random) + inferior;
}

function generaColores() {
    return "rgb(" + aleatorio(150, 255) + ", " + aleatorio(150, 255) + ", " + aleatorio(150, 255) + ")";
}




window.onload = function () {

    contexto = cargaContextoCanvas("canvas");
    if (contexto) {
       estrella();

       contexto.font="bold 13px sans-serif";
       contexto.fillStyle="black";
       contexto.textAlign="center";
       contexto.fillText("Estrella que cambia de color con degradado",150,280);
    }

    setInterval("estrella()",500)

}




