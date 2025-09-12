import { getMarketCoin } from "../api/coin";
import { createCard } from "./card";

export const renderDashboardFavorites = () => {
    const dashboardFavoritesContainer = document.createElement('div');
    dashboardFavoritesContainer.className = 'dashboard-favorites-container';

    const dashboardFavoritesHeader = document.createElement('p');
    dashboardFavoritesHeader.className = 'dashboard-favorites-header';
    dashboardFavoritesHeader.textContent = 'FAVORITES'

    dashboardFavoritesContainer.append(dashboardFavoritesHeader);
    dashboardFavoritesContainer.append(renderFavoritesCards());
    return dashboardFavoritesContainer;
}

const renderFavoritesCards = async () => {
    try {
        const coins = await getMarketCoin();
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';

        coins.forEach(c => {
            const card = createCard({
                name: c.name,
                icon: c.icon,
                symbol: c.symbol,
                price: c.current_price,
                priceChangePercentage: c.price_change_percentage_24h,
                sparkline: c.sparkline_in_7d
            });
            cardContainer.appendChild(card);
        });
    } catch(err) {
        console.error("Error rendering cards: ", err);
    }

    return cardContainer;
}