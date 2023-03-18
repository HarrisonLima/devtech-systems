function dropdownSelectEstadoCivil(anything){
    document.getElementById("dropdown__textBox--EstadoCivil").value = anything;
}

let dropdownEstadoCivil = document.getElementById("dropdownEstadoCivil");
dropdownEstadoCivil.onclick = function(){
    dropdownEstadoCivil.classList.toggle('active');
}