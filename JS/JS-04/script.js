const secaoParagrafos = document.getElementById("secao_paragrafos")

function mudarTamanhoFonte(){
    secaoParagrafos.style.fontSize= "30px";
    
}
function mudarCorFonte(){
    secaoParagrafos.style.color = "#fff";
}
function mudarCorFundo(){
    secaoParagrafos.style.backgroundColor = "#000";
}
function mudarFonteItalico(){
    secaoParagrafos.style.fontStyle ="italic";
}
function mudarFonteNegrito(){
    secaoParagrafos.style.fontWeight ="bold";
}
function adicionarBorda(){
secaoParagrafos.style.border = "3px solid #ff0000"
}
function tirarBorda(){
    secaoParagrafos.style.border = "none"
}
function esconderDiv() {
    secaoParagrafos.style.display = "none";     
}
function reaparecerDiv(){
    secaoParagrafos.style.display ="block";
}
function mudarSegundoTexto(){
    document.getElementsByClassName("texto")[1].innerHTML = "mudar 2 texto pela selecao de class";
}
function MudarCorFundoParagrafo(){
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor ="#ff0000";
}
function mudarCorFundoBotao(){
    document.getElementsByTagName("button")[5].style.backgroundColor = "lightblue";
}
function mudarCorFundosBotoes(){
    let botoes = document.getElementsByTagName("button");

    for (let contador = 0; contador < botoes.length; contador++){
        botoes[contador].style.backgroundColor = "lightgreen";
    }
    
}