/**
 * Builds the dashboard page skeleton with JavaScript.
 * Metric cards are mounted by TypeScript modules into three rows.
 */
export function buildSkeleton(root) {
    root.innerHTML = "";
    const header = document.createElement("header");
    header.className = "dashboard-header";
    header.innerHTML = `
    <img
      class="dashboard-logo"
      src="./public/abramsonLogo%20copy.png"
      alt="Abramson"
      width="160"
      height="48"
    />
    <div class="dashboard-header__copy">
      <h1>Matter Metrics</h1>
      <p>Track retainer activity and settlement outcomes across open matters.</p>
    </div>
  `;
    const metricsRows = [1, 2, 3].map((index) => {
        const row = document.createElement("section");
        row.className = "metrics-row";
        row.id = `metrics-row-${index}`;
        row.setAttribute("aria-label", `Metrics row ${index}`);
        return row;
    });
    root.append(header, ...metricsRows);
    return {
        metricsRows,
    };
}
//# sourceMappingURL=skeleton.js.map