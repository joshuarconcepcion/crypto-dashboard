import { renderDashboardBalance } from './balance';
import { renderDashboardFavorites } from './favorites';

const renderDashboardContainer = () => {
    const dashboardContainer = document.createElement('div');
    dashboardContainer.classList.add('dashboard-container');

    const dashboardContainerLeft = document.createElement('div');
    dashboardContainerLeft.classList.add('dashboard-container-left');

    const dashboardContainerRight = document.createElement('div');
    dashboardContainerRight.classList.add('dashboard-container-right');

    dashboardContainerLeft.append(
        renderDashboardBalance(),
        renderDashboardFavorites()
    );

    dashboardContainer.append(dashboardContainerLeft, dashboardContainerRight);

    return dashboardContainer;
}

export function renderDashboard(container) {
    container.appendChild(renderDashboardContainer());
}

