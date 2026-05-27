const localizacaoTexto = document.getElementById("localizacao-texto");


const cidade = localStorage.getItem("cidade");

const estado = localStorage.getItem("estado");


if(cidade && estado) {

    localizacaoTexto.textContent = `${cidade} - ${estado}`;

} else {

    localizacaoTexto.textContent = "Localização não informada";

}