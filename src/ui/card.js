export function createCard({name, icon, symbol, price, priceChangePercentage, sparkline}) {
    const card = document.createElement('div');
    card.className = 'crypto-card';

    const cardInfoContainer = document.createElement('div');
    cardInfoContainer.className = 'card-info-container';

    const cardName = document.createElement('p');
    cardName.className = 'card-name';
    cardName.textContent = name;

    const cardIconContainer = document.createElement('div');
    cardIconContainer.className = 'card-icon-container';

    const cardIcon = new Image();
    cardIcon.className = 'card-icon';
    cardIcon.src = icon;

    const cardSymbol = document.createElement('p');
    cardSymbol.className = 'card-symbol';
    cardSymbol.textContent = symbol;

    cardInfoContainer.append(cardName, cardIconContainer);



}