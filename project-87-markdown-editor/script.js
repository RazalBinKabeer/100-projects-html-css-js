function updatePreview() {
  const markdownText = document.getElementById("markdown-input").value;
  const preview = document.getElementById("preview");
  preview.innerHTML = marked(markdownText);
}
