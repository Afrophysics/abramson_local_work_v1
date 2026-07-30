function formatValue(value, format) {
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
export function createMetricCard(options) {
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
/**
 * Shared delete button used by metric cards and pivot table.
 * Uses an X icon; accessible name comes from aria-label.
 */
export function createDeleteButton(options) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = options.className ?? "btn-delete";
    button.setAttribute("aria-label", options.label);
    const icon = document.createElement("span");
    icon.className = "btn-delete__icon";
    icon.setAttribute("aria-hidden", "true");
    button.appendChild(icon);
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        options.onClick();
    });
    return button;
}
/**
 * Accordion collapsible control for the pivot table section.
 * Chevron-only; accessible name comes from aria-label.
 */
export function createAccordionButton(options) {
    let expanded = options.expanded;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn-accordion";
    button.setAttribute("aria-expanded", String(expanded));
    button.setAttribute("aria-label", expanded ? "Collapse Matter Metrics Measured" : "Expand Matter Metrics Measured");
    const chevron = document.createElement("span");
    chevron.className = "btn-accordion__chevron";
    chevron.setAttribute("aria-hidden", "true");
    button.appendChild(chevron);
    button.addEventListener("click", () => {
        expanded = !expanded;
        button.setAttribute("aria-expanded", String(expanded));
        button.setAttribute("aria-label", expanded ? "Collapse Matter Metrics Measured" : "Expand Matter Metrics Measured");
        options.onToggle(expanded);
    });
    return button;
}
//# sourceMappingURL=buttons.js.map