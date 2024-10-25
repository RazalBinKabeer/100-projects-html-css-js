const rows = document.querySelectorAll("tbody tr");

rows.forEach((row) => {
  row.addEventListener("click", () => {
    rows.forEach((r) => r.classList.remove("highlight"));
    row.classList.add("highlight");
  });
});
