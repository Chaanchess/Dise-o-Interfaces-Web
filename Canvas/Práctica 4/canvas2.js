/**
 * Usando la Api Canvas, combina el uso para dibujar rectángulos con caminos desarrollada por ti. Se valorará la original.
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

window.onload = function () {

    contexto = cargaContextoCanvas("canvas");
    //Cara
    contexto.fillStyle = "#fdddca";
    contexto.strokeStyle="black";
    contexto.strokeRect(50, 100, 400, 300);
    contexto.fillRect(50, 100, 400, 300);

    //Ojo izquierdo
    contexto.fillStyle = "white";
    contexto.strokeStyle="black";
    contexto.strokeRect(150, 150, 60, 60);
    contexto.fillRect(150, 150, 60, 60);
    contexto.fillStyle = "blue";
    contexto.fillRect(180, 180, 30, 30);
    contexto.fillStyle = "black";
    contexto.fillRect(200, 200, 10, 10);

    //Ojo derecho
    contexto.fillStyle = "white";
    contexto.strokeStyle="black";
    contexto.strokeRect(300, 150, 60, 60);
    contexto.fillRect(300, 150, 60, 60);
    contexto.fillStyle = "blue";
    contexto.fillRect(300, 180, 30, 30);
    contexto.fillStyle = "black";
    contexto.fillRect(300, 200, 10, 10);

    //Boca
    contexto.fillStyle = "red";
    contexto.strokeStyle="black";
    contexto.strokeRect(150, 300, 200, 60);
    contexto.fillRect(150, 300, 200, 60);

    //Dientes
    contexto.beginPath();
    contexto.moveTo(150, 300);
    contexto.lineTo(200, 320);
    contexto.lineTo(250, 300);
    contexto.lineTo(300, 320);
    contexto.lineTo(350, 300);
    contexto.fillStyle = "white";
    contexto.strokeStyle = "black";
    contexto.fill();
    contexto.closePath();
    contexto.stroke();

    contexto.beginPath();
    contexto.moveTo(200, 360);
    contexto.lineTo(250, 320);
    contexto.lineTo(300, 360);
    contexto.fillStyle = "white";
    contexto.strokeStyle = "black";
    contexto.fill();
    contexto.closePath();
    contexto.stroke();

    //Pelo
    contexto.beginPath();
    contexto.moveTo(50, 100);
    contexto.lineTo(100, 30);
    contexto.lineTo(150, 100);
    contexto.lineTo(200, 30);
    contexto.lineTo(250, 100);
    contexto.lineTo(300, 30);
    contexto.lineTo(350, 100);
    contexto.lineTo(400, 30);
    contexto.lineTo(450, 100);
    contexto.fillStyle = "yellow";
    contexto.strokeStyle = "black";
    contexto.fill();
    contexto.stroke();
    
}