function dropdownSelect(anything){
    document.getElementById("dropdown__textBox").value = anything;
}

let dropdownUsuario = document.getElementById("dropdown");
dropdownUsuario.onclick = function(){
    dropdownUsuario.classList.toggle('active');
}
