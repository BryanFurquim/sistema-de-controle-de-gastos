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
    console.log("Formulário enviado");
});

const tabelaLancamentos = document.getElementById

("tabela-lancamentos") as HTMLTableSectionElement;

fetch("./php/select.php")
    .then((resposta)=> {
        return resposta.text();
    })
    .then((html: string) => {
        tabelaLancamentos.innerHTML =html;

        const butExcluir = document.querySelectorAll(".excluir");

        butExcluir.forEach((botao)=>{
    
            botao.addEventListener("click" , ()=> {
                const ButId = botao.getAttribute("data-id");
                if (ButId === null) {
                    return;
                }
                if(botao.parentElement === null){
                    return
                };
                const ButPai = botao.parentElement;

                if(ButPai.parentElement === null){
                    return;
                }

                const LinhaTable = ButPai.parentElement;



                 console.log(ButId);
                 console.log(botao.parentElement.parentElement)

                fetch("./php/delete.php", {
                    method: "POST",
                    body: new URLSearchParams({
                        id: ButId
                    })
                })
                .then((resposta)=>{
                return resposta.text();
                })
                .then((resultado: string)=> {
                    console.log(resultado);
                    LinhaTable.remove();
                })
            });

    });


});