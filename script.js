function atualizar(){
    var largura = window.innerWidth;
    var altura = window.innerHeight;
    document.getElementById("largura").innerHTML = "A largura é:" + largura;
    document.getElementById("altura").innerHTML = "A altura é:" + altura;

}

atualizar();

window.addEventListener("resize", atualizar);