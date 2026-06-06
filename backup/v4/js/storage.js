const PLAN_STORAGE_KEY =
  "selected-plan";

export function getSelectedPlan() {

  return (
    localStorage.getItem(
      PLAN_STORAGE_KEY
    ) || "traditional"
  );

}

export function setSelectedPlan(plan) {

  localStorage.setItem(
    PLAN_STORAGE_KEY,
    plan
  );

}

export function loadProgress(plan) {

  const saved =
    localStorage.getItem(
      `progress-${plan}`
    );

  return saved
    ? JSON.parse(saved)
    : {};

}

export function saveProgress(
  plan,
  progress
) {

  localStorage.setItem(
    `progress-${plan}`,
    JSON.stringify(progress)
  );

}