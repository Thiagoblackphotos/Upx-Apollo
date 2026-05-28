const formulario = document.querySelector("form");

const campoEmail = document.querySelector("#email");

const erroEmail = document.querySelector("#erro-email");

formulario.addEventListener("submit", (event) => {

    let formularioValido = true;

    limparErros();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(campoEmail.value)) {

        erroEmail.textContent = "Digite um email válido.";

        formularioValido = false;
    }

    if (!formularioValido) {

        event.preventDefault();
    }
});

function limparErros() {

    erroEmail.textContent = "";
}