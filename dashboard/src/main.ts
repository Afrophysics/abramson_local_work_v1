import { buildSkeleton } from "./skeleton.js";
import { mountMetricCards } from "./metricCards.js";
import { mountPivotTable } from "./pivotTable.js";

function bootstrap(): void {
  const root = document.getElementById("app");
  if (!root) {
    throw new Error('Missing root element with id "app"');
  }

  const { metricsRow, pivotMount } = buildSkeleton(root);
  mountMetricCards(metricsRow);
  mountPivotTable(pivotMount);
}

document.addEventListener("DOMContentLoaded", bootstrap);
