// ==============================
// IMPORTS
// ==============================

import {

  loadProgress,
  saveProgress,
  getSelectedPlan,
  setSelectedPlan,
  getTheme,
  setTheme

} from "./storage.js";

// ==============================
// ELEMENTOS
// ==============================

const listContainer =
  document.getElementById(
    "reading-list"
  );

const toggleButton =
  document.getElementById(
    "toggle-plan-btn"
  );

  const themeButton =
  document.getElementById(
    "theme-btn"
  );

const resetButton =
  document.getElementById(
    "reset-btn"
  );

// ==============================
// ESTADO
// ==============================

let currentPlan =
  getSelectedPlan();

let progress =
  loadProgress();

applyTheme(
  getTheme()
);

// ==============================
// CARREGAR PLANO
// ==============================

async function loadReadingPlan() {

  const fileName =
    currentPlan === "traditional"
      ? "traditional-plan.json"
      : "chronological-plan.json";

  const response =
    await fetch(
      `../data/${fileName}`
    );

  const readingPlan =
    await response.json();

  updateToggleButton();

  updatePlanMeta(readingPlan);


  renderList(readingPlan);

}

// ==============================
// BOTÃO DE TROCA
// ==============================

function updateToggleButton() {

  if (currentPlan === "traditional") {

    toggleButton.textContent =
      "📘 Plano Tradicional";

    toggleButton.classList.remove(
      "chronological"
    );

  } else {

    toggleButton.textContent =
      "📖 Plano Cronológico";

    toggleButton.classList.add(
      "chronological"
    );

  }

}

toggleButton.addEventListener(
  "click",
  () => {

    currentPlan =
      currentPlan === "traditional"
        ? "chronological"
        : "traditional";

    setSelectedPlan(currentPlan);

    progress =
      loadProgress();

    loadReadingPlan();

  }
);

// ==============================
// NOMES DOS MESES
// ==============================

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

// ==============================
// BARRA DE PROGRESSO
// ==============================

function updateProgress(readingPlan) {

  const total =
    1189; // total oficial de capítulos da Bíblia

  const completed =
    Object.values(progress)
      .filter(value => value)
      .length;

  const percent =
    Math.round(
      (completed / total) * 100
    );

  document.getElementById(
    "progress-text"
  ).textContent =
    `${completed} / ${total} capítulos concluídos`;

  document.getElementById(
    "progress-percent"
  ).textContent =
    `${percent}%`;

  document.getElementById(
    "progress-bar"
  ).style.width =
    `${percent}%`;

}

function updatePlanMeta(readingPlan) {

  const meta =
    document.getElementById(
      "plan-meta"
    );

  const totalChapters =
    readingPlan.reduce(
      (sum, day) =>
        sum + day.readings.length,
      0
    );

  meta.textContent =
    `${readingPlan.length} dias • ${totalChapters} capítulos`;

}

// ==============================
// RENDERIZAÇÃO
// ==============================

function renderList(readingPlan) {

  listContainer.innerHTML = "";

  updateProgress(readingPlan);

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

  for (let month = 1;
       month <= 12;
       month++) {

    const monthSection =
      document.createElement("div");

    monthSection.classList.add(
      "month-section"
    );

    const monthTitle =
      document.createElement("h2");

    monthTitle.classList.add(
      "month-title"
    );

    monthTitle.textContent =
      getMonthName(month - 1);

    monthSection.appendChild(
      monthTitle
    );

    const monthItems =
      groupedMonths[month] || [];

    monthItems.forEach(item => {

      const row =
        document.createElement("div");

      row.classList.add(
        "day-item"
      );

      const checkbox =
        document.createElement("input");

      checkbox.type =
        "checkbox";

      const text =
        document.createElement("div");

      text.classList.add(
        "reading-text"
      );

      const dateSpan =
        document.createElement("span");

      dateSpan.classList.add(
        "reading-date"
      );

      dateSpan.textContent =
        item.date;

      const contentSpan =
        document.createElement("span");

      contentSpan.classList.add(
        "reading-content"
      );

      contentSpan.textContent =
        ` — ${item.readings.join(" • ")}`;

      text.appendChild(dateSpan);

      text.appendChild(contentSpan);

      // ==========================
      // CHECKBOX
      // ==========================

      const completed =
        item.readings.every(
          chapter => progress[chapter]
        );

      if (completed) {

        checkbox.checked = true;

        row.classList.add(
          "completed"
        );

      }

      checkbox.addEventListener(
        "change",
        () => {

          item.readings.forEach(
            chapter => {

              progress[chapter] =
                checkbox.checked;

            }
          );

          if (checkbox.checked) {

            row.classList.add(
              "completed"
            );

          } else {

            row.classList.remove(
              "completed"
            );

          }

          updateProgress(
            readingPlan
          );

          saveProgress(
            progress
          );

          renderList(
            readingPlan
          );

        }
      );

      row.appendChild(checkbox);

      row.appendChild(text);

      monthSection.appendChild(row);

    });

    listContainer.appendChild(
      monthSection
    );

  }

}

// ==============================
// START
// ==============================

loadReadingPlan();

function applyTheme(theme) {

  document.body.classList.toggle(
    "dark",
    theme === "dark"
  );

  themeButton.textContent =
    theme === "dark"
      ? "☀"
      : "☾";

}

themeButton.addEventListener(
  "click",
  () => {

    const nextTheme =
      document.body.classList.contains(
        "dark"
      )
        ? "light"
        : "dark";

    setTheme(nextTheme);

    applyTheme(nextTheme);

  }
);

resetButton.addEventListener(
  "click",
  () => {

    const confirmed =
      confirm(
        "Deseja apagar todo o progresso?"
      );

    if (!confirmed) {

      return;

    }

    progress = {};

    saveProgress(
      progress
    );

    loadReadingPlan();

  }
);