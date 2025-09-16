import arrowUpImg from '../media/images/dashboard/arrowUp.png';

export const renderDashboardBalance = () => {
    const dashboardBalanceContainer = document.createElement('div');
    dashboardBalanceContainer.classList.add('dashboard-balance-container');

    const balanceHeader = document.createElement('p');
    balanceHeader.className = 'dashboard-header';
    balanceHeader.innerHTML = 'TOTAL BALANCE'

    const balanceNumber = document.createElement('p');
    balanceNumber.className = 'balance-number';
    balanceNumber.innerHTML = '$42,124<span id="balance-decimals">.00</span>';

    const balanceTrend = document.createElement('div');
    balanceTrend.className = 'balance-trend';

    const balanceTrendIcon = new Image();
    balanceTrendIcon.className = 'balance-trend-icon';
    balanceTrendIcon.src = arrowUpImg;

    const balanceTrendValue = document.createElement('p');
    balanceTrendValue.className = 'balance-trend-value';
    balanceTrendValue.textContent = '+2.3%';

    balanceTrend.append(balanceTrendIcon, balanceTrendValue);
    dashboardBalanceContainer.append(balanceHeader, balanceNumber, balanceTrend);

    return dashboardBalanceContainer;
}