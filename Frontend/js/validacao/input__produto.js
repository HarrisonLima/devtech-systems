var qtde = document.getElementById("quantidadeproduto");
var valor = document.getElementById("valorproduto");

qtde.addEventListener("blur", function () {
    if(qtde.value < 1){
        qtde.value = 1;
    }
})

valor.addEventListener("blur", function () {
    if(valor.value < 1){
        valor.value = 1;
    }
})