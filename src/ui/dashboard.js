import { renderDashboardBalance } from './balance';
import { renderDashboardFavorites } from './favorites';
import { renderDashboardInsights } from './insights';

const renderDashboardContainer = async () => {
    const dashboardContainer = document.createElement('div');
    dashboardContainer.className = 'dashboard-container';

    const dashboardContainerLeft = document.createElement('div');
    dashboardContainerLeft.className = 'dashboard-container-left';

    const dashboardContainerRight = document.createElement('div');
    dashboardContainerRight.className = 'dashboard-container-right';

    dashboardContainerLeft.append(
        renderDashboardBalance(),
        await renderDashboardFavorites(),
    );

    dashboardContainerRight.append(renderDashboardInsights())

    dashboardContainer.append(dashboardContainerLeft, dashboardContainerRight);

    return dashboardContainer;
}

export const renderDashboard = async (container) => {
    container.appendChild(await renderDashboardContainer());
}

