document.getElementById("upload").addEventListener("change", function (event) {
  const canvas = document.getElementById("photo-canvas");
  const ctx = canvas.getContext("2d");
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
});

function applyFilter(filter) {
  const canvas = document.getElementById("photo-canvas");
  const ctx = canvas.getContext("2d");
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  switch (filter) {
    case "grayscale":
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = data[i + 1] = data[i + 2] = avg;
      }
      break;
    case "sepia":
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        data[i] = 0.393 * r + 0.769 * g + 0.189 * b;
        data[i + 1] = 0.349 * r + 0.686 * g + 0.168 * b;
        data[i + 2] = 0.272 * r + 0.534 * g + 0.131 * b;
      }
      break;
    case "invert":
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
      }
      break;
    case "blur":
      ctx.filter = "blur(5px)";
      ctx.drawImage(canvas, 0, 0);
      return;
  }

  ctx.putImageData(imgData, 0, 0);
}

function reset() {
  const canvas = document.getElementById("photo-canvas");
  const ctx = canvas.getContext("2d");
  const file = document.getElementById("upload").files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      ctx.filter = "none";
      ctx.drawImage(img, 0, 0);
    };
    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
}
