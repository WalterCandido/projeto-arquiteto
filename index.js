var SetaDireita = window.document.getElementById("seta-direita")
var SetaEsquerda = window.document.getElementById("seta-esquerda")
var Projeto1 = window.document.getElementById("projeto1")
var Projeto2 = window.document.getElementById("projeto2")
var Projeto3 = window.document.getElementById("projeto3")
var Projeto4 = window.document.getElementById("projeto4")

function RolarParaDireita() {
    Projeto1.style ="display:none; margin-left: 1px"
    Projeto2.style ="display:flex; margin-left: 1px"
    Projeto3.style ="display:flex; margin-left: 1px"
    Projeto4.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex"
}

function RolarParaEsquerda() {
    Projeto1.style ="display:flex"
    Projeto2.style ="display:flex"
    Projeto3.style ="display:flex"
    Projeto4.style ="display:none"
    SetaDireita.style ="display:flex"
}