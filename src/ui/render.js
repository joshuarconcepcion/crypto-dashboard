import { renderSidebar } from "./sidebar";

const container = document.getElementById('app');

export function renderUI() {
    renderSidebar(container);
}

