const STORAGE_KEY =
  "bible-progress";

// ==============================
// LOAD
// ==============================

export function loadProgress() {

  const saved =
    localStorage.getItem(
      STORAGE_KEY
    );

  return saved
    ? JSON.parse(saved)
    : {};

}

// ==============================
// SAVE
// ==============================

export function saveProgress(progress) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress)
  );

}

// ==============================
// PLANO SELECIONADO
// ==============================

export function getSelectedPlan() {

  return (
    localStorage.getItem(
      "selected-plan"
    ) || "traditional"
  );

}

export function setSelectedPlan(plan) {

  localStorage.setItem(
    "selected-plan",
    plan
  );

}

// ==============================
// TEMA
// ==============================

export function getTheme() {

  return (
    localStorage.getItem(
      "theme"
    ) || "light"
  );

}

export function setTheme(theme) {

  localStorage.setItem(
    "theme",
    theme
  );

}