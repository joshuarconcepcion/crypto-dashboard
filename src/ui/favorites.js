export const renderDashboardFavorites = () => {
    const dashboardFavoritesContainer = document.createElement('div');
    dashboardFavoritesContainer.className = 'dashboard-favorites-container';

    const dashboardFavoritesHeader = document.createElement('p');
    dashboardFavoritesHeader.className = 'dashboard-favorites-header';
    dashboardFavoritesHeader.textContent = 'FAVORITES'

    dashboardFavoritesContainer.append(dashboardFavoritesHeader);
    return dashboardFavoritesContainer;
}