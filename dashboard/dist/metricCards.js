import { createDeleteButton, createMetricCard } from "./buttons.js";
const DEFAULT_METRICS = [
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
];
const SECONDARY_METRICS = [
    {
        id: "settlement-accepted",
        title: "Settlement Accepted",
        value: 18,
        format: "integer",
    },
    {
        id: "move-to-litigation-decision",
        title: "Move to Litigation Decision",
        value: 7,
        format: "integer",
    },
];
/**
 * Mounts TypeScript-built metric cards into the dashboard metrics row.
 */
export function mountMetricCards(container, metrics = DEFAULT_METRICS) {
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
 * Mounts the secondary integer metric cards between the primary row and pivot table.
 */
export function mountSecondaryMetricCards(container, metrics = SECONDARY_METRICS) {
    mountMetricCards(container, metrics);
}
export { createMetricCard, createDeleteButton };
//# sourceMappingURL=metricCards.js.map