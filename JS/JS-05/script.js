// Declarar constantes que iremos utilizar no código
const entrada1 = document.querySelector("#nota1");
const entrada2 = document.querySelector("#nota2");
const entrada3 = document.querySelector("#nota3");
const retornoFuncao = document.querySelector("#retorno_funcao");
const resultadoMedia = document.querySelector("#resultado_media");
const situacaoAluno = document.querySelector("#situacao_aluno");

// Criar a nossa função, verificar cada um dos inputs, para ver se eles possuem números, antes de fazer o cálculo da média
function calcularMedia() {
    if (entrada1.value ==""){
        retornoFuncao.innerHTML = "nao foi inserido nenhum valor na nota 1, por isso nao foi possivel fazer a conta";
        entrada1.focus();
        entrada1.style.border=" 3px solid red";
        
    }else{
        if(entrada2.value == ""){
            retornoFuncao.innerHTML = "nao foi inserido nenhum valor na nota 2, por isso nao foi possivel fazer a conta";
            entrada2.focus();
            entrada2.style.border=" 3px solid red"

        }
        else{
            if(entrada3.value ==""){
                retornoFuncao.innerHTML = "nao foi inserido nenhum valor na nota 3, por isso nao foi possivel fazer a conta";
                entrada3.focus();
                entrada3.style.border=" 3px solid red"
            }else{
                retornoFuncao.innerHTML ="";
                let valor1 = Number(entrada1.value);
                let valor2 = Number(entrada2.value);
                let valor3 = Number(entrada3.value);
                entrada1.style.border= "1px solid black";

                let mediaNotas = (valor1 + valor2 + valor3 )/3;

                resultadoMedia.innerHTML = `o resultado da media entre as notas e ${mediaNotas.toFixed(2)}`

                classificarAluno();
            }
        }

    }
}
function classificarAluno(media){
    if (media >= 6){
        situacaoAluno.innerHTML = "O aluno foi aprovado";
    }else if (media <6 && media >3){
        situacaoAluno.innerHTML = "O aluno esta de recuperacao"
    }else {
        situacaoAluno.innerHTML =" o aluro esta reprovado"
    }
} 



// 1° Passo - deve ser pensar no resultado
//    deve pensar o que queremos fazer? o que vamos fazer?
//    qual o resultado final que queremos alcançar?

// 2° Passo - pensar como chegar no resultado
//    com o conhecimento adquirido, como podemos chegar no resultado?
//    quais ferramentas posso usar? o que preciso usar?