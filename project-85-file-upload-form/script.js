function previewFiles() {
  const filePreview = document.getElementById("file-preview");
  filePreview.innerHTML = ""; // Clear existing previews
  const files = document.getElementById("file-upload").files;

  Array.from(files).forEach((file) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        filePreview.appendChild(img);
      };
      reader.readAsDataURL(file);
    } else {
      const para = document.createElement("p");
      para.textContent = `File: ${file.name}`;
      filePreview.appendChild(para);
    }
  });
}

document
  .getElementById("upload-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Files uploaded successfully!");
  });
