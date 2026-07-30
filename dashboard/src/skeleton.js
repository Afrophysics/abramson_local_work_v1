/**
 * Builds the dashboard page skeleton with JavaScript.
 * Metric cards, buttons, and the pivot table are mounted by TypeScript modules.
 */
export function buildSkeleton(root) {
  root.innerHTML = "";

  const header = document.createElement("header");
  header.className = "dashboard-header";
  header.innerHTML = `
    <h1>Matter Metrics</h1>
    <p>Track retainer activity and settlement outcomes across open matters.</p>
  `;

  const metricsRow = document.createElement("section");
  metricsRow.className = "metrics-row";
  metricsRow.id = "metrics-row";
  metricsRow.setAttribute("aria-label", "Key metrics");

  const pivotMount = document.createElement("section");
  pivotMount.id = "pivot-mount";
  pivotMount.setAttribute("aria-label", "Matter metrics measured");

  root.append(header, metricsRow, pivotMount);

  return {
    metricsRow,
    pivotMount,
  };
}
