document.addEventListener("DOMContentLoaded", (event) => {
    let numeroRandom = Math.floor(Math.random() * 100) + 1;
    let intentos = document.querySelector("#intentos");
    let ultimoResultado = document.querySelector("#ultimoResultado");
    let menorMayor = document.querySelector("#menorMayor");
    let enviar = document.querySelector("#enviar");
    let entrada = document.querySelector("#entrada");
    let reset = document.querySelector("#reset");

    let contadorIntentos = 1;

    function revisarIntento() {
        let intento = Number(entrada.value);
        if (contadorIntentos === 1) {
            intentos.textContent = "intentos previos: ";
        }
        intentos.textContent += intento + " ";

        if (intento === numeroRandom) {
            ultimoResultado.textContent = "¡Lo adivinaste!";
            ultimoResultado.style.backgroundColor = "#8de872";
            menorMayor.textContent = "";
            setJuegoFinalizado();
        } else if (contadorIntentos === 10) {
            ultimoResultado.textContent = "¡¡¡Fin del juego!!!";
            menorMayor.textContent = "";
            setJuegoFinalizado();
        } else {
            ultimoResultado.textContent = "¡Incorrecto!";
            ultimoResultado.style.backgroundColor = "#e87e72";
            if (intento < numeroRandom) {
                menorMayor.textContent = "¡El número es más grande!";
            } else if (intento > numeroRandom) {
                menorMayor.textContent = "¡El número es más pequeño!";
            }
        }

        contadorIntentos++;
        entrada.value = "";
        entrada.focus();
    }

    enviar.addEventListener("click", revisarIntento);

    function setJuegoFinalizado() {
        entrada.disabled = true;
        enviar.disabled = true;
        reset.style.display = "inline";
        reset.addEventListener("click", resetJuego);
    }

    function resetJuego() {
        contadorIntentos = 1;
        intentos.textContent = "intentos previos: ";
        ultimoResultado.textContent = "";
        menorMayor.textContent = "";

        reset.style.display = "none";

        entrada.disabled = false;
        enviar.disabled = false;
        entrada.value = "";

        entrada.focus();

        ultimoResultado.style.backgroundColor = "white";
        numeroRandom = Math.floor(Math.random() * 100) + 1;
    }
})