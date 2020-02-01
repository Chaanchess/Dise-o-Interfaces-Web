/**
 * Usando la Api Canvas, combina arcos y/o circulos con cualquier elemento visto en canvas. Se valorará la original.
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
let x = 0;


function pacman(x) {
    contexto.beginPath();
    contexto.arc(x, 150, 140, 0.5, Math.PI * 1.75, false);
    contexto.lineTo(x, 150);
    contexto.fillStyle = "yellow";
    contexto.fill();

    contexto.beginPath();
    contexto.arc(x, 70, 30, 0, Math.PI * 2, false);
    contexto.fillStyle = "black";
    contexto.fill();

    contexto.beginPath();
    contexto.arc(x+200, 120, 30, 0, Math.PI * 1, true);
    contexto.fillStyle = "red";
    contexto.fill();

    contexto.fillStyle = "red";
    contexto.fillRect(x+170, 120, 60, 50);

    contexto.beginPath();
    contexto.arc(x+180, 120, 10, 0, Math.PI * 2, true);
    contexto.fillStyle = "white";
    contexto.fill();
    contexto.beginPath();
    contexto.arc(x+175, 120, 5, 0, Math.PI * 2, true);
    contexto.fillStyle = "black";
    contexto.fill();

    contexto.beginPath();
    contexto.arc(x+200, 120, 10, 0, Math.PI * 2, true);
    contexto.fillStyle = "white";
    contexto.fill();
    contexto.beginPath();
    contexto.arc(x+195, 120, 5, 0, Math.PI * 2, true);
    contexto.fillStyle = "black";
    contexto.fill();

    contexto.beginPath();
    contexto.arc(x+180, 170, 10, 0, Math.PI * 1, false);
    contexto.fillStyle = "red";
    contexto.fill();
    contexto.beginPath();
    contexto.arc(x+200, 170, 10, 0, Math.PI * 1, false);
    contexto.fillStyle = "red";
    contexto.fill();
    contexto.beginPath();
    contexto.arc(x+220, 170, 10, 0, Math.PI * 1, false);
    contexto.fillStyle = "red";
    contexto.fill();


    //segundo fantasma
    contexto.beginPath();
    contexto.arc(x+300, 120, 30, 0, Math.PI * 1, true);
    contexto.fillStyle = "blue";
    contexto.fill();

    contexto.fillStyle = "blue";
    contexto.fillRect(x+270, 120, 60, 50);

    contexto.beginPath();
    contexto.arc(x+280, 120, 10, 0, Math.PI * 2, true);
    contexto.fillStyle = "white";
    contexto.fill();
    contexto.beginPath();
    contexto.arc(x+275, 120, 5, 0, Math.PI * 2, true);
    contexto.fillStyle = "black";
    contexto.fill();

    contexto.beginPath();
    contexto.arc(x+300, 120, 10, 0, Math.PI * 2, true);
    contexto.fillStyle = "white";
    contexto.fill();
    contexto.beginPath();
    contexto.arc(x+295, 120, 5, 0, Math.PI * 2, true);
    contexto.fillStyle = "black";
    contexto.fill();

    contexto.beginPath();
    contexto.arc(x+280, 170, 10, 0, Math.PI * 1, false);
    contexto.fillStyle = "blue";
    contexto.fill();
    contexto.beginPath();
    contexto.arc(x+300, 170, 10, 0, Math.PI * 1, false);
    contexto.fillStyle = "blue";
    contexto.fill();
    contexto.beginPath();
    contexto.arc(x+320, 170, 10, 0, Math.PI * 1, false);
    contexto.fillStyle = "blue";
    contexto.fill();

    //tercer fantasma
    contexto.beginPath();
    contexto.arc(x+400, 120, 30, 0, Math.PI * 1, true);
    contexto.fillStyle = "green";
    contexto.fill();

    contexto.fillStyle = "green";
    contexto.fillRect(x+370, 120, 60, 50);

    contexto.beginPath();
    contexto.arc(x+380, 120, 10, 0, Math.PI * 2, true);
    contexto.fillStyle = "white";
    contexto.fill();
    contexto.beginPath();
    contexto.arc(x+375, 120, 5, 0, Math.PI * 2, true);
    contexto.fillStyle = "black";
    contexto.fill();

    contexto.beginPath();
    contexto.arc(x+400, 120, 10, 0, Math.PI * 2, true);
    contexto.fillStyle = "white";
    contexto.fill();
    contexto.beginPath();
    contexto.arc(x+395, 120, 5, 0, Math.PI * 2, true);
    contexto.fillStyle = "black";
    contexto.fill();
    
    contexto.beginPath();
    contexto.arc(x+380, 170, 10, 0, Math.PI * 1, false);
    contexto.fillStyle = "green";
    contexto.fill();
    contexto.beginPath();
    contexto.arc(x+400, 170, 10, 0, Math.PI * 1, false);
    contexto.fillStyle = "green";
    contexto.fill();
    contexto.beginPath();
    contexto.arc(x+420, 170, 10, 0, Math.PI * 1, false);
    contexto.fillStyle = "green";
    contexto.fill();
    
}


window.onload = function () {

    contexto = cargaContextoCanvas("canvas1");
    if (contexto) {
        
        
        setInterval(function(){ 
            contexto.clearRect(0,0,700,700);
            
            pacman(x%700);

            x++;
          }, 10);

          //setInterval("abreBoca("+x%700+")", 500);

        //setInterval("cierraBoca("+x%700+")", 1000);

          
          

    }


}
