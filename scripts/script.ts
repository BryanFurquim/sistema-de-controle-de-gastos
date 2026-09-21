

const forms = document.getElementById("formulario") as HTMLFormElement;

const description = document.getElementById("idescricao") as HTMLInputElement;
const category = document.getElementById("icategoria")  as HTMLSelectElement;
const valor = document.getElementById("ivalor") as HTMLInputElement;
const date = document.getElementById("idata") as HTMLInputElement;


forms.addEventListener("submit", function(event){

    if(Number(valor.value) <= 0) {
        event.preventDefault();
        alert("O valor tem que ser maior que zero");
        return;
    }

    alert("Gasto lançado, confira na tabela de lançamentos abaixo");
    console.log("Formulário enviado");
});

const tabelaLancamentos = document.getElementById

("tabela-lancamentos") as HTMLTableSectionElement;

const Vgasto: HTMLParagraphElement = document.querySelector(".Vgasto p") as HTMLParagraphElement;
const Vdisponivel: HTMLParagraphElement = document.querySelector(".Vdisponivel p") as HTMLParagraphElement;
const Vlimite: HTMLParagraphElement = document.querySelector(".Vlimite") as HTMLParagraphElement;

const limite: number = Number(Vlimite.textContent.replace("R$", "").replace(".", "").replace(",", "."));
console.log(typeof Number(limite));


function caucularValores():void{
    const valores = tabelaLancamentos.querySelectorAll<HTMLTableCellElement>("td:nth-child(4)")

    let soma: number = 0;

    valores.forEach((valorLancamento: HTMLTableCellElement): void =>{
            console.log(valorLancamento.textContent)
            if(valorLancamento === null){
                return;
            }

            const ValorText: string = valorLancamento.textContent;
            console.log(ValorText)
            const ValorNum: number = Number(ValorText);
            console.log(ValorNum)

            soma = soma + ValorNum;

            console.log(soma)

            
    });

    const totalGasto: number = soma;
    console.log(totalGasto)

    const saldoDisponivel: number = limite - totalGasto;
    console.log(saldoDisponivel)

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
    .then((html: string) => {
        tabelaLancamentos.innerHTML =html;

        caucularValores();
        
        const butExcluir = document.querySelectorAll(".excluir");

        butExcluir.forEach((botao) =>{
    
            botao.addEventListener("click" , ()=> {
                const ButId: string | null = botao.getAttribute("data-id");
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
                    caucularValores();
                })
            });

    });


});

