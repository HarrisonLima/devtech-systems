const button__exportar = document.getElementById("button__exportar--pdf")

button__exportar.addEventListener("click", () => {
  generate();
});

function generate() {
  var doc = new jsPDF("p", "pt", "letter");
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
  doc.text(200, (y = y + 30), "Lista de Serviços");
  doc.autoTable({
    html: "#tabela__servicos",
    startY: 70,
    theme: "grid",
    columnStyles: {
      0: {
        cellWidth: 30,
      },
      1: {
        cellWidth: 140,
      },
      2: {
        cellWidth: 60,
      },
      3: {
        cellWidth: 250,
      },
    },
    styles: {
      minCellHeight: 10,
    },
  });
  doc.save("listagem_servicos.pdf");
}
