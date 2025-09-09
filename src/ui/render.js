import { renderSidebar } from "./sidebar";
import { renderDashboard } from "./dashboard";

const container = document.getElementById('app');

export function renderUI() {
    renderSidebar(container);
    renderDashboard(container);
}

