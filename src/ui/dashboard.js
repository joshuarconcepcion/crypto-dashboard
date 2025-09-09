export function renderDashboard(container) {
    container.appendChild(renderDashboardContainer());
}

const renderDashboardContainer = () => {
    const dashboardContainer = document.createElement('div');
    dashboardContainer.classList.add('dashboard-container');

    const dashboardContainerLeft = document.createElement('div');
    dashboardContainerLeft.classList.add('dashboard-container-left');

    const dashboardContainerRight = document.createElement('div');
    dashboardContainerRight.classList.add('dashboard-container-right');

    dashboardContainer.append(dashboardContainerLeft, dashboardContainerRight);
    dashboardContainerLeft.append(renderDashboardBalance());

    return dashboardContainer;
}

const renderDashboardBalance = () => {
    const dashboardBalanceContainer = document.createElement('div');
    dashboardBalanceContainer.classList.add('dashboard-balance-container');

    const balanceHeader = document.createElement('p');
    balanceHeader.classList.add('balance-header');
    balanceHeader.innerHTML = 'Total Balance'

    const balanceNumber = document.createElement('p');
    balanceNumber.classList.add('balance-number');
    balanceNumber.innerHTML = '$42,124<span id="balance-decimals">.00</span>';

    dashboardBalanceContainer.append(balanceHeader, balanceNumber);
    return dashboardBalanceContainer;
}
