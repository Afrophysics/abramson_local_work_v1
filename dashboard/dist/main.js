import { buildSkeleton } from "./skeleton.js";
import { mountMetricCards, mountSecondaryMetricCards } from "./metricCards.js";
import { mountPivotTable } from "./pivotTable.js";
function bootstrap() {
    const root = document.getElementById("app");
    if (!root) {
        throw new Error('Missing root element with id "app"');
    }
    const { metricsRow, secondaryMetricsRow, pivotMount } = buildSkeleton(root);
    mountMetricCards(metricsRow);
    mountSecondaryMetricCards(secondaryMetricsRow);
    mountPivotTable(pivotMount);
}
document.addEventListener("DOMContentLoaded", bootstrap);
//# sourceMappingURL=main.js.map