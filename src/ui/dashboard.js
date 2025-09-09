export function renderDashboard(container) {
    container.appendChild(renderDashboardContainer());
}

const renderDashboardBalance = () => {
    
}

const renderDashboardContainer = () => {
    const dashboardContainer = document.createElement('div');
    dashboardContainer.classList.add('dashboard-container');

    return dashboardContainer;
}