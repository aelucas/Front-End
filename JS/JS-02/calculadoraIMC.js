function calcularIMC(){
    alert("Ola,ficamos felizes por voce abrir a calculadora de IMC")

    var peso = Number (prompt("digite seu peso"))
    alert(`O peso informado é de ${peso}kg.`)

    var altura = Number (prompt("digite sua altura"))
    alert(`a altura informada é de ${altura}.`)

    var resultadoIMC = peso / (altura **2)

    resultadoIMC = resultadoIMC.toFixed(2)
    
    alert(`o seu IMC E ${resultadoIMC}.`)

    document.getElementById("titulo_resultado_imc").style.display="block"

    document.getElementById("resuldado_imc").innerHTML = resultadoIMC
}