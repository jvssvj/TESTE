const API_LEY = 'at_FSIMR4SEznadiR8jXDGVEKcC5MZuL';
export async function getAddress(ip) {
    try {
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_LEY}&ipAddress=${ip}`;
        const resp = await fetch(url, {
            method: 'GET'
        });
        if (!resp.ok) {
            throw new Error('Failed to find address');
        }
        const data = await resp.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
