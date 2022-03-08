
function calcularMedia(){
    var numeroUm = parseFloat(prompt("Digite o primeiro numero")) 
    var numeroDois = parseFloat(prompt("digite o 2 numero"))

    var resultadoMdia = (numeroUm + numeroDois) / 2

    alert("o resultado da media e " +resultadoMdia)

    console.log("o time da variavel no numero 1 e " +typeof(numeroUm))
    console.log("o time da variavel no numero 2 e " +typeof(numeroDois))
    console.log("o time da variavel no resultado e " +typeof(resultadoMdia))

    document.getElementById("titulo_resuldado_media").style.display="block"


    document.getElementById("resultado_media").innerHTML = resultadoMdia
}
