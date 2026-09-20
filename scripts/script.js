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
            console.log(ButId);
        });
    });
});
//export {};
//# sourceMappingURL=script.js.map