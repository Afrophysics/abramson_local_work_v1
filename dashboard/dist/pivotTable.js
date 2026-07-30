import { createAccordionButton, createDeleteButton } from "./buttons.js";
const COLUMNS = [
    "Action title",
    "Case State",
    "Retainer signed at",
    "litigator",
];
const SAMPLE_ROWS = [
    {
        id: "matter-1",
        actionTitle: "WC Initial Filing",
        caseState: "Active",
        retainerSignedAt: "2026-03-12",
        litigator: "M. Alvarez",
    },
    {
        id: "matter-2",
        actionTitle: "Settlement Conference",
        caseState: "Settled",
        retainerSignedAt: "2026-01-28",
        litigator: "J. Chen",
    },
    {
        id: "matter-3",
        actionTitle: "Discovery Response",
        caseState: "Pending",
        retainerSignedAt: "2026-05-04",
        litigator: "R. Patel",
    },
    {
        id: "matter-4",
        actionTitle: "Mediation Prep",
        caseState: "Active",
        retainerSignedAt: "2026-02-19",
        litigator: "S. Brooks",
    },
];
/**
 * Builds the "Matter Metrics Measured" pivot table with accordion + delete controls.
 */
export function mountPivotTable(container, rows = SAMPLE_ROWS) {
    container.replaceChildren();
    const section = document.createElement("section");
    section.className = "pivot-section";
    section.id = "pivot-section";
    const header = document.createElement("div");
    header.className = "pivot-header";
    const titleGroup = document.createElement("div");
    titleGroup.className = "pivot-header__title-group";
    const title = document.createElement("h2");
    title.id = "pivot-title";
    title.textContent = "Matter Metrics Measured";
    titleGroup.appendChild(title);
    const actions = document.createElement("div");
    actions.className = "pivot-header__actions";
    const body = document.createElement("div");
    body.className = "pivot-body";
    body.id = "pivot-body";
    body.setAttribute("role", "region");
    body.setAttribute("aria-labelledby", "pivot-title");
    const accordion = createAccordionButton({
        expanded: true,
        onToggle: (expanded) => {
            body.classList.toggle("is-collapsed", !expanded);
            body.setAttribute("aria-hidden", String(!expanded));
        },
    });
    accordion.setAttribute("aria-controls", "pivot-body");
    const deleteTableBtn = createDeleteButton({
        label: "Delete Matter Metrics Measured table",
        onClick: () => {
            section.classList.add("removing");
            window.setTimeout(() => {
                section.remove();
            }, 220);
        },
    });
    actions.append(accordion, deleteTableBtn);
    header.append(titleGroup, actions);
    const tableWrap = document.createElement("div");
    tableWrap.className = "pivot-table-wrap";
    const table = document.createElement("table");
    table.className = "pivot-table";
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    for (const column of COLUMNS) {
        const th = document.createElement("th");
        th.scope = "col";
        th.textContent = column;
        headRow.appendChild(th);
    }
    const actionsTh = document.createElement("th");
    actionsTh.scope = "col";
    actionsTh.className = "row-actions";
    actionsTh.textContent = "Actions";
    headRow.appendChild(actionsTh);
    thead.appendChild(headRow);
    const tbody = document.createElement("tbody");
    const emptyState = document.createElement("p");
    emptyState.className = "pivot-empty";
    emptyState.hidden = true;
    emptyState.textContent = "No matter metrics to display.";
    const syncEmptyState = () => {
        const hasRows = tbody.children.length > 0;
        table.hidden = !hasRows;
        emptyState.hidden = hasRows;
    };
    for (const row of rows) {
        tbody.appendChild(createMatterRow(row, syncEmptyState));
    }
    table.append(thead, tbody);
    tableWrap.appendChild(table);
    body.append(tableWrap, emptyState);
    section.append(header, body);
    container.appendChild(section);
    syncEmptyState();
}
function createMatterRow(row, onRowRemoved) {
    const tr = document.createElement("tr");
    tr.dataset.rowId = row.id;
    const cells = [
        row.actionTitle,
        row.caseState,
        row.retainerSignedAt,
        row.litigator,
    ];
    for (const value of cells) {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
    }
    const actionsTd = document.createElement("td");
    actionsTd.className = "row-actions";
    actionsTd.appendChild(createDeleteButton({
        label: `Delete row ${row.actionTitle}`,
        onClick: () => {
            tr.classList.add("removing");
            window.setTimeout(() => {
                tr.remove();
                onRowRemoved();
            }, 180);
        },
    }));
    tr.appendChild(actionsTd);
    return tr;
}
//# sourceMappingURL=pivotTable.js.map