const button__exportar = document.getElementById("button__exportar--pdf")

button__exportar.addEventListener("click", () => {
  generate();
});

function generate() {
  var cpf = document.getElementById("cpf");
  var cliente = document.getElementById("cliente");
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
  var filterCliente = cliente.value;
  var filterActivate;

  if (filterCpf != "") {
    filterActivate = `Filtro: CPF = ${filterCpf};`;
  } else if (filterCliente != "") {
    filterActivate = `Filtro: Cliente = ${filterCliente};`;
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
  doc.text(200, (y = y + 30), "Lista de Clientes");
  doc.autoTable({
    html: "#tabela__clientespf",
    startY: 70,
    theme: "grid",
    columnStyles: {
      0: {
        cellWidth: 30,
      },
      1: {
        cellWidth: 80,
      },
      2: {
        cellWidth: 50,
      },
      3: {
        cellWidth: 50,
      },
      4: {
        cellWidth: 30,
      },
      5: {
        cellWidth: 80,
      },
      6: {
        cellWidth: 80,
      },
      7: {
        cellWidth: 35,
      },
      8: {
        cellWidth: 70,
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
  doc.save("listagem_clientes.pdf");
}
