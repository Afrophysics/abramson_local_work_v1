import { createDeleteButton, createMetricCard } from "./buttons.js";

export interface MetricDefinition {
  id: string;
  title: string;
  value: number;
  format: "integer" | "currency";
}

const DEFAULT_METRICS: MetricDefinition[] = [
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

/**
 * Mounts TypeScript-built metric cards into the dashboard metrics row.
 */
export function mountMetricCards(
  container: HTMLElement,
  metrics: MetricDefinition[] = DEFAULT_METRICS
): void {
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

export { createMetricCard, createDeleteButton };
