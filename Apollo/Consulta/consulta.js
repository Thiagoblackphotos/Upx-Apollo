const botoes = document.querySelectorAll(".cidade-btn");

const campoCidade = document.getElementById("cidade");
const campoEstado = document.getElementById("estado");

const formulario = document.getElementById("main-form");

const campoCep = document.getElementById("cep");
const campoDataset = document.getElementById("dataset");

const dataInicio = document.getElementById("dataInicio");
const dataFim = document.getElementById("dataFim");

const erroCep = document.getElementById("erroCep");
const erroDataset = document.getElementById("erroDataset");
const erroPeriodo = document.getElementById("erroPeriodo");


botoes.forEach(botao => {

    botao.addEventListener("click", (event) => {

        event.preventDefault();

        const texto = botao.textContent;

        const partes = texto.split(" - ");

        const cidade = partes[0];
        const estado = partes[1];

        campoCidade.value = cidade;
        campoEstado.value = estado;

    });

});

formulario.addEventListener("submit", (event) => {

    let formularioValido = true;

    limparErros();

    const regexCep = /^\d{5}-\d{3}$/;

    if (!regexCep.test(campoCep.value)) {

        erroCep.textContent = "Digite um CEP válido. Ex: 00000-000";

        formularioValido = false;
    }

    if (campoDataset.value === "") {

        erroDataset.textContent = "Selecione um dataset.";

        formularioValido = false;
    }


    // VALIDAR PERÍODO

    if (dataInicio.value === "" || dataFim.value === "") {

        erroPeriodo.textContent = "Selecione as duas datas.";

        formularioValido = false;

    } else if (dataInicio.value > dataFim.value) {

        erroPeriodo.textContent = "A data inicial não pode ser maior que a final.";

        formularioValido = false;
    }


    // IMPEDIR ENVIO

    if (!formularioValido) {

        event.preventDefault();
    }
});


// FUNÇÃO LIMPAR ERROS

function limparErros() {

    erroCep.textContent = "";

    erroDataset.textContent = "";

    erroPeriodo.textContent = "";

}