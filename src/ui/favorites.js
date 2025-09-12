import { getMarketCoin } from "../api/coin";
import { createCard } from "./card";

export const renderDashboardFavorites = async () => {
    const dashboardFavoritesContainer = document.createElement('div');
    dashboardFavoritesContainer.className = 'dashboard-favorites-container';

    const dashboardFavoritesHeader = document.createElement('p');
    dashboardFavoritesHeader.className = 'dashboard-favorites-header';
    dashboardFavoritesHeader.textContent = 'FAVORITES'

    dashboardFavoritesContainer.append(dashboardFavoritesHeader);

    dashboardFavoritesContainer.append(await renderFavoritesCards());
    return dashboardFavoritesContainer;
}

const renderFavoritesCards = async () => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    try {
        const coins = await getMarketCoin();

        coins.forEach(c => {
            const card = createCard({
                name: c.name,
                icon: c.image,
                symbol: c.symbol.toUpperCase(),
                price: c.current_price,
                priceChangePercentage: c.price_change_percentage_24h,
                sparkline: c.sparkline_in_7d.price
            });
            cardContainer.appendChild(card);
        });
    } catch(err) {
        console.error("Error rendering cards: ", err);
    }

    return cardContainer;
}