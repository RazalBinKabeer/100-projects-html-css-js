const timeline = document.getElementById("timeline");
const events = [
  { year: "2000", description: "Y2K and the start of the new millennium." },
  { year: "2001", description: "First iPod released by Apple." },
  { year: "2004", description: "Facebook was founded." },
  { year: "2007", description: "First iPhone released by Apple." },
  { year: "2010", description: "Instagram was founded." },
  { year: "2020", description: "Global pandemic begins." },
];

events.forEach((event) => {
  const item = document.createElement("div");
  item.classList.add("timeline-item");
  item.innerHTML = `
        <div class="timeline-item-content">
            <h2>${event.year}</h2>
            <p>${event.description}</p>
        </div>
    `;
  timeline.appendChild(item);
});
