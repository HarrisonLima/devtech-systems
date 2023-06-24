const button__exportar = document.getElementById("button__exportar--pdf");

button__exportar.addEventListener("click", () => {
  generate();
});

function generate() {
  var servico = document.getElementById("servico");
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

  var filterServico = servico.value;
  var filterDescricao = descricao.value;
  var filterActivate;

  if (filterServico != "") {
    filterActivate = `Filtro: Serviço = ${filterServico};`;
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
  doc.setFontSize(12);
  doc.text(45, (y = y + 20), filterActivate);
  doc.setFontSize(18);
  doc.text(200, (y = y + 25), "Lista de Serviços");
  doc.pageNumber = currentPage;
  doc.autoTable({
    html: "#tabela__servicos",
    startY: 80,
    theme: "plain",
    columnStyles: {
      0: {
        cellWidth: 30,
      },
      1: {
        cellWidth: 140,
      },
      2: {
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
  doc.save("listagem_servicos.pdf");
}
