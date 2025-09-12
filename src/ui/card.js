import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

export const createCard = ({name, icon, symbol, price, priceChangePercentage, sparkline}) => {
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

    const cardCanvasContainer = document.createElement('div');
    cardCanvasContainer.className = 'card-canvas-container';

    const canvas = document.createElement('canvas');
    canvas.width = '220';
    canvas.height = '70';
    new Chart(canvas, {
        type: "line",
        data: {
            labels: sparkline.map((_, i) => i),
            datasets: [{
                data: sparkline,
                borderColor: "#0000",
                borderWidth: 2,
                pointRadius: 0,
                fill: false,
                tension: 0.3,
            }],
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } },
            animation: false,
        },
    });

    cardCanvasContainer.appendChild(canvas);

    const cardPrice = document.createElement('p');
    cardPrice.textContent = price;
    cardPrice.className = 'card-price';

    const cardPctChange = document.createElement('div');
    if (priceChangePercentage >= 0) {
        cardPctChange.className = 'card-pct-change-container-pos';
    } else {
        cardPctChange.className = 'card-pct-change-container-neg';
    }

    card.append(cardInfoContainer, cardCanvasContainer, cardPrice, cardPctChange);

    return card;

}