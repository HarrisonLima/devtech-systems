const button__exportar = document.getElementById("button__exportar--pdf");

button__exportar.addEventListener("click", () => {
  generate();
});

function generate() {
  var cpf = document.getElementById("cpf");
  var cor = document.getElementById("cor");
  var marca = document.getElementById("marca");
  var modelo = document.getElementById("modelo");
  var placa = document.getElementById("placa");
  var proprietario = document.getElementById("proprietario");
  var currentDate = new Date();

  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  var data =
    day +
    "/" +
    month +
    "/" +
    year +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  var filterCpf = cpf.value;
  var filterCor = cor.value;
  var filterMarca = marca.value;
  var filterModelo = modelo.value;
  var filterPlaca = placa.value;
  var filterProprietario = proprietario.value;
  var filterActivate;

  if (filterCpf != "") {
    filterActivate = `Filtro: CPF = ${filterCpf};`;
  } else if (filterCor != "") {
    filterActivate = `Filtro: Cor = ${filterCor};`;
  } else if (filterMarca != "") {
    filterActivate = `Filtro: Marca = ${filterMarca};`;
  } else if (filterModelo != "") {
    filterActivate = `Filtro: Modelo = ${filterModelo};`;
  } else if (filterPlaca != "") {
    filterActivate = `Filtro: Placa = ${filterPlaca};`;
  } else if (filterProprietario != "") {
    filterActivate = `Filtro: Proprietário = ${filterProprietario};`;
  } else {
    filterActivate = `Filtro: Todas as informações;`;
  }

  var doc = new jsPDF("p", "pt", "A4");
  var currentPage = 1;
  pageHeight = doc.internal.pageSize.height;
  specialElementHandlers = {
    "#bypassme": function (element, renderer) {
      return true;
    },
  };
  margins = {
    top: 150,
    bottom: 60,
    left: 40,
    right: 40,
    width: 600,
  };
  var y = 20;
  doc.setLineWidth(2);
  doc.setFontSize(12);
  doc.text(45, (y = y + 20), filterActivate);
  doc.setFontSize(18);
  doc.text(200, (y = y + 25), "Lista de Veículos");
  doc.pageNumber = currentPage;
  doc.autoTable({
    html: "#tabela__veiculospf",
    startY: 80,
    theme: "plain",
    columnStyles: {
      0: {
        cellWidth: 30,
      },
      1: {
        cellWidth: 50,
      },
      2: {
        cellWidth: 50,
      },
      3: {
        cellWidth: 40,
      },
      4: {
        cellWidth: 50,
      },
      5: {
        cellWidth: 30,
      },
      6: {
        cellWidth: 50,
      },
      7: {
        cellWidth: 50,
      },
      8: {
        cellWidth: 50,
      },
      9: {
        cellWidth: 50,
      },
      10: {
        cellWidth: 50,
      },
      11: {
        cellWidth: 50,
      },
    },
    styles: {
      minCellHeight: 20,
    },
    didDrawPage: function (data) {
      doc.setFontSize(12);
      doc.text(500, 800, "Page " + doc.pageNumber);
      currentPage++;
    },
  });
  doc.setFontSize(12);
  doc.text(45, 800, data);
  doc.save("listagem_veiculos.pdf");
}
