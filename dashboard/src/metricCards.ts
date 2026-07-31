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

const SECONDARY_METRICS: MetricDefinition[] = [
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

/**
 * Mounts the secondary integer metric cards between the primary row and pivot table.
 */
export function mountSecondaryMetricCards(
  container: HTMLElement,
  metrics: MetricDefinition[] = SECONDARY_METRICS
): void {
  mountMetricCards(container, metrics);
}

export { createMetricCard, createDeleteButton };
