import { buildSkeleton } from "./skeleton.js";
import { mountAllMetricRows } from "./metricCards.js";

function bootstrap(): void {
  const root = document.getElementById("app");
  if (!root) {
    throw new Error('Missing root element with id "app"');
  }

  const { metricsRows } = buildSkeleton(root);
  mountAllMetricRows(metricsRows);
}

document.addEventListener("DOMContentLoaded", bootstrap);
