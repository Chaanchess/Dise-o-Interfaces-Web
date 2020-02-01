/**
 * Usando la Api Canvas, carga un imagen, recortala y redimensionala en un canvas. En el archivo debe aparecer también la imagen original. Se valorará la original.
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


window.onload = function () {

    contexto = cargaContextoCanvas("canvas");
    if (contexto) {
        let image = new Image();
        image.src="https://78.media.tumblr.com/236316ae84631e937d199038bde203db/tumblr_p8cqq7UVu21r868elo1_500.jpg";
        image.onload = function(){
            contexto.drawImage(image,5,5,500,300);
            contexto.drawImage(image,195,70,50,75,5,405,100,100);
            contexto.drawImage(image,250,80,150,190,130,405,150,150);
            contexto.drawImage(image,120,200,250,500,300,450,150,250);
        }
        
    }

}