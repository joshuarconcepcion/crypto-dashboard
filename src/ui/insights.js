import sampleContent1 from '../media/images/dashboard/sampleContent1.png';
import sampleContent2 from '../media/images/dashboard/sampleContent2.png';

export const renderDashboardInsights = () => {
    const dashboardInsightsContainer = document.createElement('div');
    dashboardInsightsContainer.className = 'dashboard-insights-container';

    const dashboardInsightsHeader = document.createElement('p');
    dashboardInsightsHeader.className = 'dashboard-header';
    dashboardInsightsHeader.textContent = 'INSIGHTS';

    const dashboardInsightsContentContainer = document.createElement('div');
    dashboardInsightsContentContainer.className = 'dashboard-insights-content-container';

    const dashboardInsightsLeft = new Image();
    dashboardInsightsLeft.className = 'dashboard-insights-content';
    dashboardInsightsLeft.src = sampleContent1;

    const dashboardInsightsRight = new Image();
    dashboardInsightsRight.className = 'dashboard-insights-content';
    dashboardInsightsRight.src = sampleContent2;
    

    dashboardInsightsContentContainer.append(dashboardInsightsLeft, dashboardInsightsRight);
    dashboardInsightsContainer.append(dashboardInsightsHeader, dashboardInsightsContentContainer);


    return dashboardInsightsContainer;
}