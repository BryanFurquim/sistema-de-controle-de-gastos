interface dadosDoFormulario {
    description: string,
    categoria:string,
    valor: number,
    data: Date
}

const forms = document.getElementById("formulario") as HTMLFormElement;

const description = document.getElementById("idescricao") as HTMLInputElement;
const category = document.getElementById("icategoria")  as HTMLSelectElement;
const valor = document.getElementById("ivalor") as HTMLInputElement;
const date = document.getElementById("idata") as HTMLInputElement;


forms.addEventListener("submit", function(event){

    if(Number(valor.value) <= 0) {
        event.preventDefault();
        alert("O valor tem que ser maior que zero!");
        return;
    }

    alert("Gasto lançado, confira na tabela de lançamentos abaixo");
    console.log("Formulário enviado")
})