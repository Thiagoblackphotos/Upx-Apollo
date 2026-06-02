document.addEventListener("DOMContentLoaded", () => {

    const botoes = document.querySelectorAll(".right-top button");

    const btnCompartilhar = botoes[0];
    const btnPdf = botoes[1];

    // Compartilhar
    btnCompartilhar.addEventListener("click", async () => {

        const textoCompartilhamento = `
Apollo Project - Análise de Viabilidade Energética

Resultado: Excelente Potencial Energético
Viabilidade Geral: 92%

Incidência Solar: 5.2 kWh/m²
Velocidade do Vento: 3.8 m/s
        `;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Apollo Project",
                    text: textoCompartilhamento,
                    url: window.location.href
                });
            } catch (erro) {
                console.log("Compartilhamento cancelado.");
            }
        } else {
            await navigator.clipboard.writeText(textoCompartilhamento);

            alert("Resultado copiado para a área de transferência!");
        }
    });
});