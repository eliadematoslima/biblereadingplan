import { readingPlan } from "./data.js";
import { loadProgress, saveProgress } from "./storage.js";

const listContainer = document.getElementById("reading-list");

const progress = loadProgress();

function renderList() {

  readingPlan.forEach(item => {

    const row = document.createElement("div");
    row.classList.add("day-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createElement("span");
    text.classList.add("reading-text");

    text.textContent =
      `Dia ${item.day} — ${item.text}`;

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

renderList();