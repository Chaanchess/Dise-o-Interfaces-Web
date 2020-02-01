/**
 * Permite pausar o reanudar la animación 7.1 para explicar la diferencia entre el valor "paused" y "running" en la propiedad "animation-play-state"
 * y la animación 8 (la última) donde se muestran todas las propiedades activas.
 * 
 * @author Fco Javier González Sabariego
 */
{
    let boton;
    let boton2;
    let animation71;
    let animation8;

    /**
     * Controla la ejecución de la animación con id "anim7_1", pausándola o renudándola, invirtiendo su estado actual.
     */
    let controlAnimacion7 = function() {
        if (animation71.textContent=="running") {
            animation71.innerText = "paused";
            animation71.style.animationPlayState="paused";
            boton.value="Reanudar";
        } else {
            animation71.innerText = "running";
            animation71.style.animationPlayState="running";
            boton.value="Pausar";
        }
    }

    /**
     * Controla la ejecución de la animación con id "anim8", pausándola o renudándola, invirtiendo su estado actual.
     */
    let controlAnimacion8 = function() {
        if (animation8.style.animationPlayState=="running" || animation8.style.animationPlayState=="") {
            animation8.style.animationPlayState="paused";
            boton2.value="Reanudar";
        } else {
            animation8.style.animationPlayState="running";
            boton2.value="Pausar";
        }
    }

    /**
     * Pausa o reanuda la animación correspondiente al botón asociado a ella.
     */
    let pausarReanudar = function() {
        if (this.id=="paused") controlAnimacion7();
        else controlAnimacion8();
    }

    let init = function() {
        animation71 = document.getElementById("anim7_1");
        animation8 = document.getElementById("anim8");
        boton = document.getElementById("paused");
        boton2 = document.getElementById("paused_anim8");

        boton.addEventListener("click", pausarReanudar);
        boton2.addEventListener("click", pausarReanudar);
    }

    document.addEventListener("DOMContentLoaded", init);
}