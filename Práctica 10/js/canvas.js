/**
 * @author Francisco José Sánchez Romero
 */
function cargaContextoCanvas(idCanvas) {
    var elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        var contexto = elemento.getContext('2d');
        var contexto2 = elemento.getContext('2d');
        if (contexto && contexto2) {
            return contexto, contexto2;
        }
    }
    return false;
}

window.onload = function() {
    let i = 100;
    let j = 400;
    let creaCuadrado = true;

    let contexto = cargaContextoCanvas('canvas');
    let contexto2 = cargaContextoCanvas('canvas2');
    if (contexto && contexto2) {
        contexto.fillStyle = colorAleatorio();
        contexto2.fillStyle = colorAleatorio();

        setInterval(function() {
            if (creaCuadrado) {
                //le damos un color al borde de cada cuadrado
                contexto.strokeStyle = colorAleatorio();
                contexto2.strokeStyle = colorAleatorio();

                //tamaño que van a tener los cuadrados del interior
                contexto.strokeRect(i += 3, i += 3, j -= 6, j -= 6);
                contexto2.strokeRect(i += 3, i += 3, j -= 6, j -= 6);

            }
            if (j <= 6) {
                creaCuadrado = false;
            }

        }, 100);
    }


    //Crea número aleatorio necesario para los colores
    function aleatorio(inferior, superior) {
        let numero = superior - inferior;
        let random = Math.floor(Math.random() * numero);
        return parseInt(inferior) + random;
    }

    //Creaer color aleatorio
    function colorAleatorio() {
        return "rgb(" + aleatorio(0, 255) + ", " + aleatorio(0, 255) + ", " + aleatorio(0, 255) + ")";
    }
}