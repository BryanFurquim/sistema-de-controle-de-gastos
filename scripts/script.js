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
const Vgasto = document.querySelector(".Vgasto p");
const Vdisponivel = document.querySelector(".Vdisponivel p");
const Vlimite = document.querySelector(".Vlimite");
console.log(Number(Vlimite.textContent.replace("R$", "").replace(".", "").replace(",", ".")));
const limite = Number(Vlimite.textContent.replace("R$", "").replace(".", "").replace(",", "."));
console.log(typeof Number(limite));
function caucularValores() {
    const valores = tabelaLancamentos.querySelectorAll("td:nth-child(4)");
    let soma = 0;
    valores.forEach((valorLancamento) => {
        console.log(valorLancamento.textContent);
        if (valorLancamento === null) {
            return;
        }
        const ValorText = valorLancamento.textContent;
        console.log(ValorText);
        const ValorNum = Number(ValorText);
        console.log(ValorNum);
        soma = soma + ValorNum;
        console.log(soma);
    });
    const totalGasto = soma;
    console.log(totalGasto);
    const saldoDisponivel = limite - totalGasto;
    console.log(saldoDisponivel);
    Vgasto.textContent = totalGasto.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    Vdisponivel.textContent = saldoDisponivel.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
fetch("./php/select.php")
    .then((resposta) => {
    return resposta.text();
})
    .then((html) => {
    tabelaLancamentos.innerHTML = html;
    caucularValores();
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
                caucularValores();
            });
        });
    });
});
//# sourceMappingURL=script.js.map