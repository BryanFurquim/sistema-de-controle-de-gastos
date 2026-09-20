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
//# sourceMappingURL=script.js.map