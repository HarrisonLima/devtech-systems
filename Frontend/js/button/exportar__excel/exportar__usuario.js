const button__exportar__excel = document.getElementById("button__exportar--excel");

button__exportar__excel .addEventListener("click", () => {
  exportExcel();
    // exportReportToExcel(this);
});

function exportExcel() {
    TableExport(document.getElementById("tabela__usuarios"), {
      filename: "excelfile",
      sheetname: "sheet1",
    });
}

function exportReportToExcel() {
  let table = document.getElementById("tabela__usuarios");
  TableToExcel.convert(table[0], {
    name: `file.xlsx`,
    sheet: {
      name: "Sheet 1",
    },
  });
}
