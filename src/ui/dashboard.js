import arrowUpImg from '../media/images/dashboard/arrowUp.png';

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

    const balanceTrend = document.createElement('div');
    balanceTrend.classList.add('balance-trend');

    const balanceTrendIcon = new Image();
    balanceTrendIcon.classList.add('balance-trend-icon');
    balanceTrendIcon.src = arrowUpImg;

    const balanceTrendValue = document.createElement('p');
    balanceTrendValue.classList.add('balance-trend-value');
    balanceTrendValue.textContent = '+2.3%';

    balanceTrend.append(balanceTrendIcon, balanceTrendValue);
    dashboardBalanceContainer.append(balanceHeader, balanceNumber, balanceTrend);
    
    return dashboardBalanceContainer;
}

const renderDashboardFavorites = () => {

}