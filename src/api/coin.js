const COINS = ['bitcoin', 'ethereum', 'ripple', 'tether']

export async function getMarketCoin(ids = COINS, vs = 'usd') {
    const url = new URL('https://api.coingecko.com/api/v3/coins/markets');
    url.searchParams.set('vs_currency', vs);
    url.searchParams.set('ids', ids.join(','));
    url.searchParams.set('price_change_percentage', '24h');
    url.searchParams.set('sparkline', 'true');

    try {
        const res = await fetch(url.toString(),{ headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(`CoinGecko error: ${res.status}`);
        return await res.json();
    } catch (err) {
        console.error('Failed to fetch market data: ', err);
        throw err;
    }
}