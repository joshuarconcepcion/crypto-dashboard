import { renderSidebar } from "./sidebar";
import { renderDashboard } from "./dashboard";
import { renderTopbar } from "./topbar";

const container = document.getElementById('app');

export const renderUI = async () => {
    renderTopbar(container);
    renderSidebar(container);
    await renderDashboard(container);
}

