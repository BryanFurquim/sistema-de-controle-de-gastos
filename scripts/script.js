"use strict";
const forms = document.getElementById("formulario");
const description = document.getElementById("idescricao");
const category = document.getElementById("icategoria");
const valor = document.getElementById("ivalor");
const date = document.getElementById("idata");
forms.addEventListener("submit", function (event) {
    if (Number(valor.value) <= 0) {
        event.preventDefault();
        alert("O valor tem que ser maior que zero!");
        return;
    }
    alert("Gasto lançado, confira na tabela de lançamentos abaixo");
    console.log("Formulário enviado");
});
const tabelaLancamentos = document.getElementById("tabela-lancamentos");
fetch("./php/select.php")
    .then((resposta) => {
    return resposta.text();
})
    .then((html) => {
    tabelaLancamentos.innerHTML = html;
    const butExcluir = document.querySelectorAll(".excluir");
    butExcluir.forEach((botao) => {
        botao.addEventListener("click", () => {
            const ButId = botao.getAttribute("data-id");
            if (ButId === null) {
                return;
            }
            if (botao.parentElement === null) {
                return;
            }
            ;
            const ButPai = botao.parentElement;
            if (ButPai.parentElement === null) {
                return;
            }
            const LinhaTable = ButPai.parentElement;
            console.log(ButId);
            console.log(botao.parentElement.parentElement);
            fetch("./php/delete.php", {
                method: "POST",
                body: new URLSearchParams({
                    id: ButId
                })
            })
                .then((resposta) => {
                return resposta.text();
            })
                .then((resultado) => {
                console.log(resultado);
                LinhaTable.remove();
            });
        });
    });
});
//# sourceMappingURL=script.js.map