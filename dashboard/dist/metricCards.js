import { createDeleteButton, createMetricCard } from "./buttons.js";
/** Row 1 — three metric cards */
const METRICS_ROW_1 = [
    {
        id: "wc-retainers-signed",
        title: "WC Retainers Signed",
        value: 42,
        format: "integer",
    },
    {
        id: "settled-out-of-court",
        title: "Settled out of Court",
        value: 187500,
        format: "currency",
    },
    {
        id: "settlement-accepted",
        title: "Settlement Accepted",
        value: 18,
        format: "integer",
    },
];
/** Row 2 — three metric cards */
const METRICS_ROW_2 = [
    {
        id: "move-to-litigation-decision",
        title: "Move to Litigation Decision",
        value: 7,
        format: "integer",
    },
    {
        id: "total-amount-recieved-from-retainers",
        title: "Total Amount Recieved From Retainers",
        value: 245000,
        format: "currency",
    },
    {
        id: "case-completed-by-intake",
        title: "Case Completed by Intake",
        value: 31,
        format: "integer",
    },
];
/** Row 3 — three metric cards */
const METRICS_ROW_3 = [
    {
        id: "calls-made-today",
        title: "Calls Made Today",
        value: 24,
        format: "integer",
    },
    {
        id: "reasons-clients-unable-to-sign",
        title: "Reasons clients are unable to sign",
        value: 5,
        format: "integer",
    },
    {
        id: "approved-mediation-brief-by-attorney",
        title: "Approved Mediation Brief by Attorney",
        value: 12,
        format: "integer",
    },
];
export const METRIC_ROWS = [
    METRICS_ROW_1,
    METRICS_ROW_2,
    METRICS_ROW_3,
];
/**
 * Mounts TypeScript-built metric cards into a dashboard metrics row.
 */
export function mountMetricCards(container, metrics) {
    container.replaceChildren();
    for (const metric of metrics) {
        const card = createMetricCard({
            ...metric,
            onDelete: (id) => {
                console.info(`Metric card removed: ${id}`);
            },
        });
        container.appendChild(card);
    }
}
/**
 * Mounts all metric card rows (three rows of three).
 */
export function mountAllMetricRows(rows) {
    rows.forEach((row, index) => {
        const metrics = METRIC_ROWS[index];
        if (!metrics) {
            return;
        }
        mountMetricCards(row, metrics);
    });
}
export { createMetricCard, createDeleteButton };
//# sourceMappingURL=metricCards.js.map