
function dropdownSelectGenero(anything){
    document.getElementById("dropdown__textBox--Genero").value = anything;
}

let dropdownGenero = document.getElementById("dropdownGenero");
dropdownGenero.onclick = function(){
    dropdownGenero.classList.toggle('active');
}