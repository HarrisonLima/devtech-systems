const button__exportar = document.getElementById("button__exportar--pdf");

button__exportar.addEventListener("click", () => {
  generate();
});

function generate() {
  var peca = document.getElementById("peca");
  var marca = document.getElementById("marca");
  var descricao = document.getElementById("descricao");
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

  var filterPeca = peca.value;
  var filterMarca = marca.value;
  var filterDescricao = descricao.value;
  var filterActivate;

  if (filterPeca != "") {
    filterActivate = `Filtro: Peça = ${filterPeca};`;
  } else if (filterMarca != "") {
    filterActivate = `Filtro: Marca = ${filterMarca};`;
  } else if (filterDescricao != "") {
    filterActivate = `Filtro: Descrição = ${filterDescricao};`;
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
  doc.text(200, (y = y + 30), "Lista de Peças");
  doc.autoTable({
    html: "#tabela__pecas",
    startY: 70,
    theme: "grid",
    columnStyles: {
      0: {
        cellWidth: 30,
      },
      1: {
        cellWidth: 100,
      },
      2: {
        cellWidth: 100,
      },
      3: {
        cellWidth: 250,
      },
    },
    styles: {
      minCellHeight: 10,
    },
    didDrawPage: function (data) {
      doc.setFontSize(12);
      doc.text(500, 800, "Page " + doc.pageNumber);
      currentPage++;
    },
  });
  doc.setFontSize(12);
  doc.text(45, 800, data);
  doc.save("listagem_pecas.pdf");
}
