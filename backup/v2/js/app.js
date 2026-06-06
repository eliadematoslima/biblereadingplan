import {
  loadProgress,
  saveProgress
} from "./storage.js";

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

function getMonthName(month) {

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  return months[month];

}

function renderList(readingPlan) {

  listContainer.innerHTML = "";

  const groupedMonths = {};

  readingPlan.forEach(item => {

    const parts =
      item.date.split("/");

    const month =
      Number(parts[1]);

    if (!groupedMonths[month]) {

      groupedMonths[month] = [];

    }

    groupedMonths[month].push(item);

  });

  for (let month = 1; month <= 12; month++) {

    const monthSection =
      document.createElement("div");

    monthSection.classList.add("month-section");

    const monthTitle =
      document.createElement("h2");

    monthTitle.classList.add("month-title");

    monthTitle.textContent =
      getMonthName(month - 1);

    monthSection.appendChild(monthTitle);

    const monthItems =
      groupedMonths[month] || [];

    monthItems.forEach(item => {

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

      monthSection.appendChild(row);

    });

    listContainer.appendChild(monthSection);

  }

}

loadReadingPlan();
