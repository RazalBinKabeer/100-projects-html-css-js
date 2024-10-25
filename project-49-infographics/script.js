const container = document.getElementById("infographic-container");
const infographics = [
  {
    title: "The Impact of Global Warming",
    content:
      "Global warming is causing severe weather changes, rising sea levels, and loss of biodiversity.",
  },
  {
    title: "Benefits of a Healthy Diet",
    content:
      "A healthy diet can boost your immune system, improve mental health, and increase energy levels.",
  },
  {
    title: "The Rise of Renewable Energy",
    content:
      "Renewable energy sources such as solar and wind are becoming more affordable and efficient.",
  },
];

infographics.forEach((info) => {
  const item = document.createElement("div");
  item.classList.add("infographic-item");
  item.innerHTML = `
        <h2>${info.title}</h2>
        <p>${info.content}</p>
    `;
  container.appendChild(item);
});
