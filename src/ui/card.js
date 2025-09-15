import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

const formatUSD = (n) => {
    if (n < 1) {
        return `$${n.tofixed(6)}`;
    }
    return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const CARD_COLORS = [
    'rgb(204, 128, 96)', 
    'rgb(82, 71, 215)', 
    'rgb(42, 157, 143)', 
    'rgb(233, 169, 58)'
];
let colorIndex = 0;

export const createCard = ({name, icon, symbol, price, priceChangePercentage, sparkline}) => {
    const card = document.createElement('div');
    card.className = 'crypto-card';

    card.style.backgroundColor = CARD_COLORS[colorIndex % CARD_COLORS.length];
    colorIndex++;

    const cardInfoContainer = document.createElement('div');
    cardInfoContainer.className = 'card-info-container';

    const cardIcon = new Image();
    cardIcon.className = 'card-icon';
    cardIcon.src = icon;

    const cardNameContainer = document.createElement('div');
    cardNameContainer.className = 'card-name-container';

    const cardName = document.createElement('p');
    cardName.className = 'card-name';
    cardName.textContent = name;

    const cardSymbol = document.createElement('p');
    cardSymbol.className = 'card-symbol';
    cardSymbol.textContent = symbol;

    cardNameContainer.append(cardName, cardSymbol);

    cardInfoContainer.append(cardIcon, cardNameContainer);

    const cardCanvasContainer = document.createElement('div');
    cardCanvasContainer.className = 'card-canvas-container';

    const canvas = document.createElement('canvas');
    canvas.width = '150';
    canvas.height = '70';
    new Chart(canvas, {
        type: "line",
        data: {
            labels: sparkline.map((_, i) => i),
            datasets: [{
                data: sparkline,
                borderColor: 'black',
                borderWidth: 2,
                pointRadius: 0,
                fill: false,
                tension: 0.1,
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
    cardPrice.textContent = formatUSD(price);
    cardPrice.className = 'card-price';

    const cardPctChange = document.createElement('div');
    cardPctChange.textContent = priceChangePercentage;
    if (priceChangePercentage >= 0) {
        cardPctChange.className = 'card-pct-change-container-pos';
    } else {
        cardPctChange.className = 'card-pct-change-container-neg';
    }

    card.append(cardInfoContainer, cardCanvasContainer, cardPrice, cardPctChange);

    return card;

}