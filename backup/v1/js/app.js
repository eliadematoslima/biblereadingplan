import { loadProgress, saveProgress } from "./storage.js";

const listContainer =
  document.getElementById("reading-list");

const progress = loadProgress();

async function loadReadingPlan() {

  const response =
    await fetch("../data/reading-plan.json");

  const readingPlan =
    await response.json();

  renderList(readingPlan);

}

function renderList(readingPlan) {

  readingPlan.forEach(item => {

    const row =
      document.createElement("div");

    row.classList.add("day-item");

    const checkbox =
      document.createElement("input");

    checkbox.type = "checkbox";

    
    const text =
    document.createElement("div");

    text.classList.add("reading-text");

    const dateSpan =
    document.createElement("span");

    dateSpan.classList.add("reading-date");

    dateSpan.textContent =
    item.date;

    const contentSpan =
    document.createElement("span");

    contentSpan.classList.add("reading-content");

    contentSpan.textContent =
    ` — ${item.readings.join(" • ")}`;

    text.appendChild(dateSpan);

    text.appendChild(contentSpan);

    if (progress[item.day]) {

      checkbox.checked = true;

      row.classList.add("completed");

    }

    checkbox.addEventListener("change", () => {

      if (checkbox.checked) {

        row.classList.add("completed");

        progress[item.day] = true;

      } else {

        row.classList.remove("completed");

        progress[item.day] = false;

      }

      saveProgress(progress);

    });

    row.appendChild(checkbox);

    row.appendChild(text);

    listContainer.appendChild(row);

  });

}

loadReadingPlan();