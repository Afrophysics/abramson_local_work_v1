export type MetricFormat = "integer" | "currency";

export interface MetricCardOptions {
  id: string;
  title: string;
  value: number;
  format: MetricFormat;
  onDelete?: (id: string) => void;
}

function formatValue(value: number, format: MetricFormat): string {
  if (format === "currency") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  }

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Creates a metric card with a delete button (TypeScript).
 */
export function createMetricCard(options: MetricCardOptions): HTMLElement {
  const card = document.createElement("article");
  card.className = "metric-card";
  card.dataset.metricId = options.id;
  card.setAttribute("aria-label", options.title);

  const label = document.createElement("p");
  label.className = "metric-card__label";
  label.textContent = options.title;

  const value = document.createElement("p");
  value.className = "metric-card__value";
  value.textContent = formatValue(options.value, options.format);

  const deleteBtn = createDeleteButton({
    label: `Delete ${options.title}`,
    onClick: () => {
      card.classList.add("removing");
      window.setTimeout(() => {
        card.remove();
        options.onDelete?.(options.id);
      }, 220);
    },
  });

  card.append(label, value, deleteBtn);
  return card;
}

export interface DeleteButtonOptions {
  label: string;
  onClick: () => void;
  className?: string;
}

/**
 * Shared delete button used by metric cards and pivot table rows.
 */
export function createDeleteButton(options: DeleteButtonOptions): HTMLButtonElement {
  const button = document.createElement("button");
  button.type = "button";
  button.className = options.className ?? "btn-delete";
  button.textContent = "Delete";
  button.setAttribute("aria-label", options.label);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    options.onClick();
  });
  return button;
}

export interface AccordionButtonOptions {
  expanded: boolean;
  onToggle: (expanded: boolean) => void;
}

/**
 * Accordion collapsible control for the pivot table section.
 */
export function createAccordionButton(
  options: AccordionButtonOptions
): HTMLButtonElement {
  let expanded = options.expanded;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn-accordion";
  button.setAttribute("aria-expanded", String(expanded));

  const chevron = document.createElement("span");
  chevron.className = "btn-accordion__chevron";
  chevron.setAttribute("aria-hidden", "true");

  const text = document.createElement("span");
  text.className = "btn-accordion__text";
  text.textContent = expanded ? "Collapse" : "Expand";

  button.append(chevron, text);

  button.addEventListener("click", () => {
    expanded = !expanded;
    button.setAttribute("aria-expanded", String(expanded));
    text.textContent = expanded ? "Collapse" : "Expand";
    options.onToggle(expanded);
  });

  return button;
}
